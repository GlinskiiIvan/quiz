import {createContext, useReducer} from "react";
import data from "../data";
import {shuffleAnswers} from "../helpers";

const initialState = {
    questions: data,
    currentQuestionIndex: 0,
    showResults: false,
    answers: shuffleAnswers(data[0]),
    currentAnswer: '',
    correctAnswersCount: 0
};

const  reducer = (state, action) => {
    console.log('reducer', state)
    switch (action.type) {
        case 'SELECT_ANSWER': {
            const correctAnswersCount = state.questions[state.currentQuestionIndex].correctAnswer === action.payload ? state.correctAnswersCount + 1 : state.correctAnswersCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount
            }
        }
        case 'NEXT_QUESTION': {
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: ''
            }
        }
        case 'RESTART': {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export const QuizContext = createContext();

export const QuizProvider = (props) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
}