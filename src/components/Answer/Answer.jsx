import React from 'react';
import styles from './Answer.module.scss'

const Answer = (props) => {
    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = props.currentAnswer && props.answerText === props.correctAnswer;
    const isWrongAnswer = props.currentAnswer === props.answerText && props.currentAnswer !== props.correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
    const disabledClass = props.currentAnswer ? 'disabled-answer' : '';

    return (
        <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} onClick={() => props.onSelectAnswer(props.answerText)}>
            <div className='answer-letter'>{letterMapping[props.index]}</div>
            <div className='answer-text'>{props.answerText}</div>
        </div>
    );
};

export default Answer;