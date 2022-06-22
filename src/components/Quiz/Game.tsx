import { FC, useMemo, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useTimer } from "use-timer";
import Question from "./Question";
import TimeBar from "./TimeBar";
import questionList from "./questions";
import { shuffleArray } from "../../utils/arrays";

const TIMER = 8;

const Game: FC = () => {
  const [timeUp, setTimeUp] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const { time, start, reset } = useTimer({
    initialTime: TIMER - 1,
    endTime: -1,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      setTimeUp(true);
    },
  });
  const [started, setStarted] = useState(false);

  const currentQuestion = useMemo(() => {
    const ques = questionList[questionNumber];
    ques.answers = shuffleArray(ques.answers);
    return ques;
  }, [questionNumber]);

  const formatQuestion = (question: string): string => {
    let formatted = question.replace("{both}", "Ilse & Oscar");
    formatted = formatted.replace("{she}", "Ilse");
    formatted = formatted.replace("{he}", "Oscar");
    return formatted;
  };

  const onStartQuiz = () => {
    setStarted(true);
    start();
  };

  const onStop = () => {
    setStarted(false);
    reset();
    setQuestionNumber(0);
  };

  const onNext = () => {
    reset();
    start();
    setTimeUp(false);
    setQuestionNumber(questionNumber + 1);
  };

  const onAnswer = (answer: string | null) => {
    if (answer === questionList[questionNumber].answers[0]) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
    onNext();
  };

  return (
    <section>
      {started ? (
        <div className="position-relative">
          <TimeBar progress={time} total={TIMER} />
          <Button
            variant="dark fs-4 letters"
            className="position-absolute ms-4"
            style={{ top: "1.5rem" }}
            onClick={onStop}
          >
            Stop
          </Button>
        </div>
      ) : null}
      <Container>
        {started ? (
          <Question
            key={questionNumber}
            number={questionNumber + 1}
            question={formatQuestion(currentQuestion.question)}
            answers={currentQuestion.answers}
            onAnswer={onAnswer}
            timeUp={timeUp}
          />
        ) : (
          <div className="p-5 m-5 text-center">
            <Button variant="dark" size="lg" onClick={onStartQuiz}>
              Iniciar Quiz!
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Game;
