import "../index.css";
import data from "../assets/data.json";
import "../assets/icon-css.svg";
import im from "../assets/icon-correct.svg";
import "./answerCheck.css";
import { useState } from "react";

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
              <div className="row">
                <div className="left-side">
                  <h1 className="question"> {obj2.question}</h1>
                </div>

                <div className="right-side">
                  {obj2.options.map((obj3, choice) => {
                    return (
                      <>
                        <ul>
                          <li
                            key={index}
                            className={"choice"}
                            onClick={() => {
                              setSlectedIndex(index);
                              if (obj2.answer.match(obj3)) {
                                alert("correct you gave");
                              } else {
                                alert("wrong answer provided");
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
                </div>
              </div>
            </>
          );
        }
      }
    });
  });

  return (
    <>
      <div className="body">
        {question}
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
    </>
  );
}

export default Question;
