import React from "react";
const Nav = props => {
  return (
    <div className="Nav">
      <h1 onClick={() => props.setContentFunc("home")} id="home">
        David Currie
      </h1>
      <ul id="workList">
        <li onClick={() => props.setContentFunc("necklace")} id="necklace">
          Mesh Audio
        </li>
        <li onClick={() => props.setContentFunc("multimono")} id="multimono">
          MultiMono
        </li>
        <li onClick={() => props.setContentFunc("upCycle")} id="upCycle">
          UpCycle
        </li>
        <li onClick={() => props.setContentFunc("comPoser")} id="comPoser">
          ComPoser
        </li>
        <li onClick={() => props.setContentFunc("socketAV")} id="socketAV">
          SocketAV
        </li>
        <li onClick={() => props.setContentFunc("ambisonic")} id="ambisonic">
          Ambisonic Work
        </li>
        <li
          onClick={() => props.setContentFunc("stringQuartet")}
          id="stringQuartet"
        >
          String Quartet
        </li>
      </ul>
    </div>
  );
};

export default Nav;
