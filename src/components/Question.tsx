import "../index.css";
import data from "../assets/data.json";
import "../assets/styles.css";
import "../assets/general.css";
import "../assets/animation.css";
import clap from "../assets/clap.mp3";
import { useState } from "react";
import Vision from "./mode";
import { Typography } from "@mui/material";
import Confetti from "react-confetti";

function Question() {
  //assigning and passing the json file
  var Data = data.quizzes;
  //to keep track of questions in a subject
  var [x, setx] = useState(0);
  // to keep track of subject category
  var [y, sety] = useState(0);
  //progress  value checker
  var [progress, setProgress] = useState(30);
  //to make a selection of four choices
  var [selectanser, setSelectAnswer] = useState(-1);
  // keeping track of which button to be displayed under choices for a question, submit or next
  var [showbutton, setShowbutton] = useState(true);
  // to change question after answering another
  var [next, setNext] = useState(false);
  //to choose which subject to take quiz
  var [quizetype, setquizType] = useState(false);
  // to check if clicked and don't alllow further selection
  var [clicked, setClicked] = useState(false);
  // show answer after submiting
  var [showans, setShowans] = useState(false);
  //results value tracker
  var [results, setresults] = useState(0);
  //keep track of which page to display at at time, subject page or quiz page or results page
  var [show, setshow] = useState(false);
  // display results after completing the subject quiz
  var [score, setscore] = useState(false);
  //error on trying to submit without making a selection
  var [error, seterror] = useState("");
  var [errorimg, seterrorimg] = useState(false);
  //for shw
  var [answercolor, setAnswercolor] = useState(false);
  // keeping track of a disabledlike button for submission of answer
  var [diasbled, setdisabled] = useState(false);
  // keeping track of where to show quiz title
  var [showquiztitle, setshowquiztitle] = useState(false);
  //to make a selection of four choices
  var [select, setselect] = useState(-1);
  // show celebration after getting more than 5
  var [celebration, setcelebration] = useState(false);
  //redefining css for the mode toggler
  var [resultpage, showresultspagemode] = useState(false);

  //getting subject title
  const title = Data.map((Q, ind) => {
    if (ind === select) {
      return Q.title;
    }
  });

  // getting subject icon

  const icon = Data.map((Q, ind) => {
    if (ind === select) {
      return Q.icon;
    }
  });
  // jubilation audio
  const audio = new Audio(clap);
  // subject titles  and it's display for frontpage, monitoring onclick for a quiz to start
  const quiztypes = data.quizzes.map((obj, index) => {
    return (
      <li
        key={obj.title}
        className="topic"
        id="topic"
        onClick={() => {
          setselect(index);
          setshowquiztitle(true);
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
              <div className="vertical-spacer"></div>
              <div>
                <div className="result-page ">
                  <div className="left-content">
                    <p className="complete"> Quiz Completed</p>

                    <h1 className="scored"> You Scored...</h1>
                  </div>
                  <div className="right-content">
                    <div className="results">
                      {celebration && (
                        <div>
                          <Confetti
                            style={{
                              width: "90%",
                              marginLeft: "5%",
                              height: "100%",
                            }}
                          />
                        </div>
                      )}
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
                        setcelebration(false);
                        setshowquiztitle(false);
                        showresultspagemode(false);
                        audio.pause();
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
              <div className="container" id="container">
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
                              transition: " 0.1s ease-in",
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
                                if (
                                  obj3.toString() === obj2.answer.toString()
                                ) {
                                  setresults(results + 1);
                                }
                              }
                            }}
                          >
                            {" "}
                            <span
                              style={{
                                transition: "backgroundColor 0.1s ease-in",

                                backgroundColor:
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
                            <div className="icon-ans">
                              <img
                                className="icon"
                                src={
                                  showans
                                    ? obj2.answer.toString() === obj3.toString()
                                      ? "icon-correct.svg"
                                      : selectanser === choice
                                      ? "icon-incorrect.svg"
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
                            showresultspagemode(true);

                            if (results >= 6) {
                              setcelebration(true);
                              audio.play();
                            }
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
      <div className="top">
        {showquiztitle && (
          <div className="quize-title">
            <span>
              {" "}
              <img src={icon[select]} alt="" />
            </span>{" "}
            <p>{title}</p>
          </div>
        )}
        <div className="spacer"></div>
        <div className={resultpage ? "mode" : "mode-changer"}>
          <Vision />
        </div>
      </div>
      {quizetype ? (
        question
      ) : (
        <>
          <div className="front-page">
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
        </>
      )}
    </>
  );
}

export default Question;
