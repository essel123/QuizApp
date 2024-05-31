import "../index.css";
import data from "../assets/data.json";
import "../assets/icon-css.svg";
import im from "../assets/icon-correct.svg";
import "./answerCheck.css";
import { useState } from "react";
import Home from "./Home";

function Question() {
  var Data = data.quizzes;

  var [x, setx] = useState(0);
  var [y, sety] = useState(0);

  var [selectedIndex, setSlectedIndex] = useState(-1);



  var question = Data.map((obj1, index) => {
    return obj1.questions.map((obj2, index_) => {
      if (index === y) {
        if (index_ === x) {
          return (
            <>
              <b>{obj1.title}</b>
              <div className="left">
                <h1 className="subtitle"> {obj2.question}</h1>
              </div>

              {obj2.options.map((obj3, choice) => {
                return (
                  <>
                    <ul>
                      <li
                        key={index}
                        className={"topic"}
                        onClick={() => {
                          setSlectedIndex(index);
                          if (obj2.answer.match(obj3)) {
                          } else {
                          }
                        }}
                      >
                        {" "}
                        <span>
                          {choice == 0
                            ? "A"
                            : choice === 1
                            ? "B"
                            : choice === 2
                            ? "C"
                            : "D"}
                        </span>{" "}
                        <p> {obj3}</p>
                        <img className="icon" src={im} />
                      </li>
                    </ul>
                  </>
                );
              })}
            </>
          );
        }
      }
    });
  });

  return (
    <>
      <div className="container">
        <div className="row_">
          <div className="right">
            <div className="right">
              {question}
              <div className="error">
                <li style={{ listStyleType: "none" }}>
                  {" "}
                  <p id="error"></p>
                </li>
              </div>
              <button
                onClick={() => {
                  setx((x) => x + 1);
                  if (x === 9) {
                    setx(0);
                    sety((y) => y + 1);
                    if (y >= 3) {
                      sety(0);
                    }
                  }
                }}
                className="subbtn"
              >
                Question {x + 1} y {y}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
