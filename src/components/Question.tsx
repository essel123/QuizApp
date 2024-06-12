import "../index.css";
import data from "../assets/data.json";
import "./answerCheck.css";
import { useState } from "react";
import Vision from "./mode";
import { Typography } from "@mui/material";

function Question() {
  var Data = data.quizzes;

  var [x, setx] = useState(0);
  var [y, sety] = useState(0);
  var [progress, setProgress] = useState(30);
  var [selectanser, setSelectAnswer] = useState(-1);
  var [showbutton, setShowbutton] = useState(true);
  var [next, setNext] = useState(false);
  var [quizetype, setquizType] = useState(false);
  var [clicked, setClicked] = useState(false);
  var [showans, setShowans] = useState(false);
  var [results, setresults] = useState(0);
  var [show, setshow] = useState(false);
  var [score, setscore] = useState(false);
  var [error, seterror] = useState("");
  var [errorimg, seterrorimg] = useState(false);
  var [answercolor, setAnswercolor] = useState(false);
  var [diasbled, setdisabled] = useState(false);

  const quiztypes = data.quizzes.map((obj, index) => {
    return (
      <li
        key={obj.title}
        className="topic"
        id="topic"
        onClick={() => {
          if (index === 0) {
            setquizType(true);
            sety(0);
          } else if (index === 1) {
            setquizType(true);
            sety(1);
          } else if (index === 2) {
            setquizType(true);
            sety(2);
          } else {
            setquizType(true);
            sety(3);
          }
        }}
      >
        <span>
          <img key={obj.icon} src={obj.icon} alt="url error" />
        </span>
        <h3 key={obj.title}> {obj.title}</h3>
      </li>
    );
  });

  var question = Data.map((obj1, index) => {
    return obj1.questions.map((obj2, index_) => {
      if (index === y) {
        if (index_ === x) {
          return score ? (
            <>
              <div className="top">
                <div className="quize-title">
                  <span key={obj1.icon}>
                    {" "}
                    <img src={obj1.icon} alt="" />
                  </span>{" "}
                  <p key={obj1.title}>{obj1.title}</p>
                </div>
                <div className="spacer"></div>
                <div className="mode-changer">
                  <Vision />
                </div>
              </div>
              <div className="vertical-spacer"></div>
              <div>
                <div className="result-page ">
                  <div className="left-content">
                    <Typography>
                      <p className="complete"> Quiz Completed</p>
                    </Typography>
                    <h1 className="scored"> You Scored...</h1>
                  </div>
                  <div className="right-content">
                    <div className="results">
                      <div className="quiz-title">
                        <span key={obj1.icon}>
                          {" "}
                          <img src={obj1.icon} alt="" />
                        </span>{" "}
                        <p key={obj1.title}>{obj1.title}</p>
                      </div>
                      <div className="score">
                        <h1>{show ? results : ""}</h1>
                      </div>
                      <div className="out">
                        <p>out of {obj1.questions.length}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setquizType(false);
                        setscore(false);
                        setresults(0);
                      }}
                      className="trybtn"
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="top">
                <div className="quize-title">
                  <span key={obj1.icon}>
                    {" "}
                    <img src={obj1.icon} alt="" />
                  </span>{" "}
                  <p key={obj1.title}>{obj1.title}</p>
                </div>
                <div className="spacer"></div>
                <div className="mode-changer">
                  <Vision />
                </div>
              </div>
              <div className="container">
                <div className="left-side">
                  <p className="current-number">
                    Question {x + 1} of {obj1.questions.length}
                  </p>
                  <h2 key={obj2.question} className="Question">
                    {" "}
                    {obj2.question}
                  </h2>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${progress}px`,
                        backgroundColor: "#A729F5",
                      }}
                    >
                      <p>{(progress / 300) * 100} %</p>
                    </div>
                  </div>
                </div>

                <div className="right-side">
                  {obj2.options.map((obj3, choice) => {
                    return (
                      <>
                        <ul>
                          <li
                            style={{
                              transition: "0.1s ease-in",
                              pointerEvents: diasbled ? "none" : "auto",
                              cursor: "pointer",
                              border:
                                selectanser === choice
                                  ? answercolor
                                    ? obj3.toString() === obj2.answer.toString()
                                      ? "2px solid #26D782"
                                      : "2px solid #EE5454"
                                    : ` ${clicked ? "2px solid #A729F5" : ""} `
                                  : "none",
                            }}
                            key={obj3}
                            className={"choice"}
                            id="choice"
                            onClick={() => {
                              seterror("");
                              setdisabled(true);
                              seterrorimg(false);
                              setShowbutton(false);
                              selectanser = choice;
                              setSelectAnswer(choice);

                              if (selectanser === choice) {
                                setClicked(true);
                              }

                              if (selectanser === choice) {
                                if (
                                  obj3.toString() === obj2.answer.toString()
                                ) {
                                  setresults(results + 1);
                                }
                              }

                              // var e = document.getElementById("choice")
                            }}
                          >
                            {" "}
                            <span
                              style={{
                                transition: "0.1s ease-in",

                                background:
                                  selectanser === choice
                                    ? answercolor
                                      ? obj3.toString() ===
                                        obj2.answer.toString()
                                        ? "#26D782"
                                        : "#EE5454"
                                      : ` ${clicked ? "#A729F5" : ""} `
                                    : "",
                                color:
                                  selectanser === choice
                                    ? answercolor
                                      ? obj3.toString() ===
                                        obj2.answer.toString()
                                        ? "white"
                                        : "white"
                                      : ` ${clicked ? "white" : ""} `
                                    : "",
                              }}
                            >
                              {choice == 0
                                ? "A"
                                : choice === 1
                                ? "B"
                                : choice === 2
                                ? "C"
                                : "D"}
                            </span>{" "}
                            <div className="options">
                              <h2> {obj3}</h2>
                            </div>
                            <div className="space"></div>
                            <div className="alt">
                              <img
                                className="icon"
                                src={
                                  selectanser === choice
                                    ? showans
                                      ? obj3.toString() ===
                                        obj2.answer.toString()
                                        ? "icon-correct.svg"
                                        : obj3.toString() ===
                                          obj2.answer.toString()
                                        ? "icon-correct.svg"
                                        : "icon-incorrect.svg"
                                      : ""
                                    : ""
                                }
                              />
                            </div>
                          </li>
                        </ul>
                      </>
                    );
                  })}
                  <div className="btn-control">
                    {next ? (
                      <button
                        onClick={() => {
                          setNext(false);
                          setShowbutton(true);
                          setClicked(false);
                          setShowans(false);
                          setAnswercolor(false);
                          setdisabled(false);
                          setx((x) => x + 1);
                          if (progress < 300) {
                            setProgress(progress + 30);
                          } else {
                            setProgress(30);
                          }
                          if (x === obj1.questions.length - 1) {
                            setx(0);
                            setshow(true);
                            setscore(true);

                            // sety((y) => y + 1);
                            // if (y >= 3) {
                            //   setscore(true);
                            //   sety(0);
                            // }
                          }
                        }}
                        className="subbtn"
                      >
                        Next
                      </button>
                    ) : showbutton ? (
                      <button
                        onClick={() => {
                          seterror("Please select an answer");
                          seterrorimg(true);
                        }}
                        className="subbtn"
                      >
                        Submit Answer
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          // var answerGeter = Data.map((ans, index) => {
                          //   if (index === y) {
                          //     return ans.questions.map((ans1, ansindex) => {
                          //       if (ansindex === x) {
                          //         return ans1.answer;
                          //       }
                          //     });
                          //   }
                          // });
                          setClicked(false);
                          setShowans(true);
                          setNext(true);
                          setAnswercolor(true);
                        }}
                        className="subbtn_"
                      >
                        Submit Answer
                      </button>
                    )}

                    <p id="error">
                      <img
                        src={errorimg ? "icon-incorrect.svg" : ""}
                        alt=""
                        style={{
                          transition: "3s ease-in-out",
                        }}
                      />
                      {error}
                    </p>
                  </div>
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
      {quizetype ? (
        question
      ) : (
        <>
          <div className="front-page">
            <div className="mode-to-right">
              <Vision />
            </div>
            <div className="vertical-spacer"></div>
            <div className="container ">
              <div className="row_">
                <div className="left">
                  <Typography>
                    <p className="title"> Welcome to the</p>
                  </Typography>
                  <h1 className="subtitle"> Frontend Quiz!</h1>

                  <p className="subject"> Pick a subject to get started.</p>
                </div>
                <div className="right">
                  <ul>{quiztypes}</ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Question;
