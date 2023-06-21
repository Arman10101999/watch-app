import React from "react";
import "./Intro.css";
import front_post1 from "./Images/front_post1.jpg";
import front_post2 from "./Images/front_post2.jpg";
import front_post3 from "./Images/front_post3.jpg";
import front_post4 from "./Images/front_post4.jpg";

function Intro() {
  return (
    <div className="Intro">
      <div className="nav_bar_left">
        <div className="logo"> LOGO </div>
      </div>
      <div className="front__page">
        <img className="front__posters" src={front_post2} alt="1" />
        <img className="front__posters" src={front_post1} alt="2" />
        <img className="front__posters " src={front_post3} alt="3" />
        <img className="front__posters " src={front_post4} alt="4" />
      </div>

      <div className="front_text">
        <div className="text_front">Classic Revive</div>
      </div>
    </div>
  );
}

export default Intro;

//<div class="video-wallpaper">
//   <video autoplay muted loop id="video-background">
//     <source src="path/to/your/video.mp4" type="video/mp4">
//     <!-- Add additional source elements for different video formats -->
//   </video>
// </div>
