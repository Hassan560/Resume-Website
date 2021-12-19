import React from "react";
import profileImg from "../../Assests/image.jpg";

function Profile() {
  return (
    <div className="profile">
      <img src={profileImg} alt="profileImage" />
      <div className="profile__body">
      <h5>Syed Hassan Hussain</h5>
      <p>Front End Developer</p>
      </div>
    </div>
  );
}

export default Profile;
