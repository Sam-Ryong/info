import "react-quill/dist/quill.snow.css";
import Slider from "../Slider/Slider";
import Profile from "../Profile/Profile";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="slider-container">
        <Slider />
      </div>
      <div className="profile-container">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
