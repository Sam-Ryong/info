import React from "react";
import profileData from "../hardData/Profile.json"; // JSON 파일 import
import "./Profile.css";

const Profile = () => {
  const { name, major, mbti, born, imageURL, currentWork } = profileData;

  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <img
          src={imageURL} // 이미지 URL 없으면 기본 이미지 사용
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">{name}</h2>
        <p className="profile-major">{major}</p>
        <p className="profile-mbti">
          <strong>MBTI:</strong> {mbti}
        </p>
        <p className="profile-born">
          <strong>Born:</strong> {born}
        </p>
        {currentWork.length > 0 && (
          <div className="profile-current-work">
            <h3>Current Work:</h3>
            <ul>
              {currentWork.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
