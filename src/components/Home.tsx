import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "./answerCheck.css"
import data from "../assets/data.json";

function Home() {
  const quiztypes = data.quizzes.map((obj, index) => {
    return (
      <li
        key={index}
        className="topic"
        onClick={() => {
          if (index === 0) {
            console.log(index);
            alert("you clicked html quiz");
          } else if (index === 1) {
            console.log(index);
            alert("you clicked css quiz");
          } else if (index === 2) {
            console.log(index);
            alert("you clicked javascript quiz");
          } else {
            console.log(index);
            alert("you clicked accessibilty quiz");
            console.log();
          }
        }}
      >
        <span>
          <img key={index} src={obj.icon} alt="i" />
        </span>
        <h3> {obj.title}</h3>
      </li>
    );
  });

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
            <ul>{quiztypes}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
