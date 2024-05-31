import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/icon-accessibility.svg";
import "../assets/icon-css.svg";
import "../assets/icon-html.svg";
import "../assets/icon-js.svg";


import "../index.css";
// import { useState } from "react";

// var topic = 0;
// var data =
// {

function Home() {
  var topics = ["HTML", "CSS", "Javascript", "Accessibility"];
  // var myimages = [
  //   "./src/assets/icon-html.svg",
  //   "./src/assets/icon-css.svg",
  //   "./src/assets/icon-js.svg",
  //   ,
  //   "./src/assets/icon-accessibility.svg"
  // ];
 var im = "./src/assets/icon-accessibility.svg";

  // const listItem = topics.map((myimages) => (
  //   <li className="topic">
  //     <span>
      
  //     </span>
     
  //   </li>
  // ));

  const listItems = topics.map((topic) => (
    <li className="topic">
      <span>
        <img src={im} alt="" />
      </span>
      <h3> {topic} </h3>
    </li>
  ));

  return (
    <>
  
    

      <div className="container">
        <div className="row_">
          <div className="left">
            <h1 className="title"> Welcome to the</h1>
            <h1 className="subtitle"> Frontend Quiz!</h1>

            <p className="subject"> Pick a subject to get started.</p>
          </div>
          <div className="right">
            <ul>{listItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
