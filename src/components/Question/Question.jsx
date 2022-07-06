import React from 'react';
import styles from './Question.module.scss'
import Answer from "../Answer/Answer";
import {useContext} from "react";
import {QuizContext} from "../../contexts/quiz";

const Question = (props) => {
    const [state, dispatch] = useContext(QuizContext);
    const currentQuestion = state.questions[state.currentQuestionIndex];

    return (
        <div>
            <div className='question'>{currentQuestion.question}</div>
            <div className='answers'>
                {state.answers.map((answer, index) => (
                    <Answer
                        key={answer}
                        index={index}
                        answerText={answer}
                        correctAnswer={currentQuestion.correctAnswer}
                        currentAnswer={state.currentAnswer}
                        onSelectAnswer={(answerText) => dispatch({type: 'SELECT_ANSWER', payload: answerText})}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;