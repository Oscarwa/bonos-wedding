import { FC } from 'react';
import { Button } from 'react-bootstrap';

interface QuestionProps {
    number: number;
    question: string;
    answers: string[];
    onAnswer: (answer: any) => void;
    timeUp: boolean;
}

const Question: FC<QuestionProps> = ({number, question, answers, onAnswer, timeUp}) =>{
    return (
      <>
        <div className="my-5">
          <div className="mb-4 fs-5 josefine">Pregunta # {number}</div>
          <div className="text-center fs-1 josefine shadow-charcoal">{question}</div>
        </div>
        <hr />
        <div className="text-center">
          {answers.map((a, index) => (
            <Button
              key={index}
              className="w-100 py-2 mb-4 letters fs-2"
              size="lg"
              variant="dark"
              disabled={timeUp}
              onClick={() => onAnswer(a)}
            >
              {a}
            </Button>
          ))}
          {timeUp ? (
            <Button
              className="w-100 py-2 mb-5 letters fs-2"
              variant="dark"
              onClick={() => onAnswer(null)}
            >Siguiente</Button>
          ) : null}
        </div>
      </>
    );
}

export default Question;