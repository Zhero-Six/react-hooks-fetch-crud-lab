import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function handleDeleteQuestion(id) {
    setQuestions(questions.filter((question) => question.id !== id));
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestions(
      questions.map((question) =>
        question.id === updatedQuestion.id ? updatedQuestion : question
      )
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={handleDeleteQuestion}
            onUpdateQuestion={handleUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;