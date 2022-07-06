import React, {useContext, useReducer, useState} from 'react';
import styles from './Quiz.module.scss'
import Question from "../Question/Question";
import {QuizContext} from "../../contexts/quiz";

const Quiz = (props) => {
    const [state, dispatch] = useContext(QuizContext);

    console.log('state', state)
    return (
        <div className='quiz'>
            {
                !state.showResults && (
                    <div>
                        <div className='score'>Вопрос {state.currentQuestionIndex + 1}/{state.questions.length}</div>
                        <Question />
                        <button className='next-button' onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Следующий вопрос</button>
                    </div>
                )
            }
            {
                state.showResults && (
                    <div className='results'>
                        <div className='congratulations'>Поздравления!</div>
                        <div className='results-info'>
                            <div>Вы завершили тест.</div>
                            <div>Вы ответили на {state.correctAnswersCount}/{state.questions.length} вопросов.</div>
                            <div className='next-button' onClick={() => dispatch({type: 'RESTART'})}>Начать занаво</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Quiz;