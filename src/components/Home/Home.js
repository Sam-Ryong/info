import "react-quill/dist/quill.snow.css";
import Profile from "../Profile/Profile";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="profile-container">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
