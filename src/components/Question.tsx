import "../index.css";

var question = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler",
    ],
    answer: "Hyper Text Markup Language",
  },
];

var questions = question.map((object) => {
  return object.options;
});

var list = questions.map((myobj) =>
{
    return (
      <li className="topic">
        <span></span>
        <h3> {myobj} </h3>
      </li>
    );
})

function Question() {
   
  return (
    <>
      <div className="right">
        <ul>
          {questions}
        </ul>
      </div>
    </>
  );
}

export default Question;
