import React from "react";
import work from "../work.json";
const Content = props => {
  const currentWork = props.page;
  return (
    <div className="Content">
      {currentWork.id === "home" && (
        <div className="home">
          <img src={currentWork.photo} alt="" />
          <br />
          <p>
            <a id="linkText" href="mailto:davidalexandercurrie.gmail.com">
              david.alexander.currie@gmail.com
            </a>
          </p>
          <p>
            <a
              id="linkText"
              href="https://github.com/davidalexandercurrie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              id="linkText"
              href="https://soundcloud.com/davidalexandercurrie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud
            </a>
          </p>
        </div>
      )}

      <p id="description">{currentWork.description}</p>

      {currentWork.gif && (
        <div id="necklaceContainer">
          <iframe
            title="mesh audio"
            src="https://player.vimeo.com/video/376725194"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
          <div id="necklacePhotoGallery">
            <img src={currentWork.photo} alt="" />
            <img src={currentWork.photo2} alt="" />
          </div>
        </div>
      )}

      {currentWork.url && (
        <div id="webFrameContainer">
          <iframe
            id="webFrame"
            title={currentWork.id}
            src={currentWork.url}
            allow="camera; microphone"
          ></iframe>
        </div>
      )}

      {currentWork.id === "ambisonic" && (
        <div id="ambisonicContainer">
          <iframe
            id="scPlayer"
            title={currentWork.id}
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/721032049&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <img src={currentWork.photo} alt="max work for ambisonic piece" />
        </div>
      )}

      {currentWork.id === "stringQuartet" && (
        <div className="stringQuartet">
          <img src={currentWork.final} alt="final score sheet" />
          <div className="stringQuartetSplitSection">
            <img src={currentWork.photo} alt="score sheet one" />
            <img src={currentWork.photo2} alt="score sheet two" />
            <img src={currentWork.photo3} alt="score sheet three" />
            <img src={currentWork.photo4} alt="score sheet four" />
          </div>
          <div className="videoContainer">
            <iframe
              id="stringQuartetVideo"
              title="string quartet performance"
              src={currentWork.video}
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <img src={currentWork.photo5} alt="performer notes" />
        </div>
      )}
    </div>
  );
};

export default Content;
