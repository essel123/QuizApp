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

  var imm = [

  ];

  var [selectedIndex, setSlectedIndex] = useState(-1);

  var question = Data.map((obj1, index) => {
    return obj1.questions.map((obj2, index_) => {
      if (index === y) {
        if (index_ === x) {
          var imsrc = "";
          return (
            <>
              <div className="question-body">
                <div className="left-side">
                  <p className="current-number">
                    <ul>
                      <h1>{obj1.title}</h1>
                    </ul>
                    Question {x + 1} of {obj1.questions.length}
                  </p>
                  <h2 className="Question"> {obj2.question}</h2>
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
                                imsrc = im;
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
                            <h2> {obj3}</h2>
                            <img className="icon" src={imsrc} />
                          </li>
                        </ul>
                      </>
                    );
                  })}
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
                    Submit Answer {x + 1} y {y}
                  </button>
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
        
      </div>
    </>
  );
}

export default Question;
