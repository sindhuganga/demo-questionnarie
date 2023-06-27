import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(false);

  const toggleQuestion = (id) => {
    // This will just set the active id to the question id and we won't be able to close the
    // question once its opened, so in order to rectify it , we need to check if the opened
    // id is equal to the question id, if so set it as null so that it can collapse,
    // else set it to the id

    // setActiveId(id);
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
