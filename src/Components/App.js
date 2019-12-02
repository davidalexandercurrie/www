import React, {useState} from 'react';
import Nav from './Nav';
import Content from './Content';
import work from '../work.json';
let currentLocation = "home";
const App = () => {
  const [content, setContent] = useState("home");
  let page = work.work.find(x => x.id ===content);
  const setContentFunc = (id) => {
    setContent(id);
    page = work.work.find(x => x.id ===id);
    document.body.style.color = page.firstColor;

    document.getElementById(currentLocation).style.color = "inherit";
    document.getElementById(currentLocation).style.textDecoration = "none";

    document.getElementById(id).style.color = page.secondColor;
    document.getElementById(id).style.textDecoration= "underline";

    if(document.getElementById("webFrameContainer")){
      document.getElementById("webFrameContainer").style.backgroundColor = page.secondColor;
      document.getElementById("webFrameContainer").style.border = "3.5px solid " + page.secondColor;
    }
    document.getElementById("description").style.color = page.thirdColor;
    currentLocation = id;
  }
  return (
    <div className="App">
      <Nav content={content} setContentFunc={setContentFunc} page={page}/>
      <Content  content={content} setContentFunc={setContentFunc} page={page}/>
    </div>
  );
}

export default App;
