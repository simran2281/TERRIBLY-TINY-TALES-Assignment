import React from "react";
import backgroundImage from "../Images/background.jpeg"; // Corrected path to the background image
import profilePicture from "../Images/profile.jpg"; // Corrected path to the profile picture
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DoneIcon from "@mui/icons-material/Done";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div
          className="background-picture"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="name-info">
        <h2>
          Anuj Gosalia
          <button style={{ backgroundColor: "rgb(87, 8, 160)" }}>
            <div className="dianmond">
            <DiamondOutlinedIcon style={{ color: "white" }} />
            </div>
          </button>
          <button style={{ backgroundColor: "rgb(28, 188, 113)" }}>
          <div className="done">
            <DoneIcon style={{ color: "black" }} />
            </div>
          </button>
        </h2>

        <div className="buttons">
          <button>
            <p>6482</p>
            <h3>Followers</h3>
          </button>
          <button>
            <p>245</p>
            <h3>Followings</h3>
          </button>
        </div>
      </div>

      <div className="profile-info">
        <h4>Co-founder & CEO at Terribly Tiny Tales</h4>
        <a
          href="https://www.instagram.com/anujgosalia"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.instagram.com/anujgosalia
        </a>

        <div className="icons">
          <button style={{ backgroundColor: "rgb(11, 220, 220)" }}>
            <StarBorderIcon style={{ color: "white" }} />
          </button>
          125
          <button style={{ backgroundColor: "rgb(220, 175, 11)" }}>
            <ThumbUpOffAltIcon style={{ color: "white" }} />
          </button>
          12
          <button style={{ backgroundColor: "grey" }}>
            <VisibilityOutlinedIcon style={{ color: "white" }} />
          </button>
          57.8K
          <button style={{ backgroundColor: "rgb(177, 9, 138)" }}>
            <FavoriteBorderIcon style={{ color: "white" }} />
          </button>
          26.0K
        </div>
      </div>
    </div>
  );
};

export default Profile;
