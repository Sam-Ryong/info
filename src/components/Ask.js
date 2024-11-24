import React, { useState } from "react";

const Ask = () => {
  const [prompt, setPrompt] = useState("What is his Major in university??");
  const [result, setResult] = useState("");
  const [modelLoading, setModelLoading] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleRunClick = () => {
    setModelLoading(true);
    // Add logic for model loading, generating result here
    setTimeout(() => {
      setModelLoaded(true);
      setGenerating(true);
      // Simulate the result after generating
      setTimeout(() => {
        setResult("He is studying Computer Engineering.");
        setGenerating(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div>
      <main className="container">
        <section>
          <h2>성능 확인용 페이지</h2>

          <select id="model" name="model" hidden required>
            <option value="https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf">
              TinyLlama/TinyLlama-1.1B-Chat-v1.0 Q4_K_M (669 MB)
            </option>
          </select>
          <br />

          <textarea
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <br />

          <pre id="result" name="result">
            {result}
          </pre>
        </section>
        <br />
        <section>
          <button id="run" onClick={handleRunClick}>
            Run
          </button>
        </section>

        <section>
          {modelLoading && (
            <button id="run-progress-loading-model" aria-busy="true">
              Loading model...
            </button>
          )}
          {modelLoaded && !generating && (
            <button id="run-progress-loaded-model" aria-busy="true">
              Loaded model
            </button>
          )}
          {generating && (
            <button id="run-progress-generating" aria-busy="true">
              Generating...
            </button>
          )}
        </section>

        <section>
          <progress
            id="model-progress"
            hidden={!(modelLoading || generating)}
          />
        </section>
      </main>

      <script type="module" src="example-multi-thread.js"></script>
      <script src="coi-serviceworker.min.js"></script>
    </div>
  );
};

export default Ask;
