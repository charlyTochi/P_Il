import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { QuizData, QuizState, UserAnswer } from '../types/quiz';

interface QuizContextType {
  quizData: QuizData | null;
  quizState: QuizState;
  setQuizData: (data: QuizData) => void;
  startActivity: (activityIndex: number) => void;
  answerQuestion: (answer: UserAnswer) => void;
  nextQuestion: () => void;
  nextRound: () => void;
  resetQuiz: () => void;
  getScore: () => { correct: number; total: number };
  completeRound: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

type QuizAction =
  | { type: 'SET_QUIZ_DATA'; payload: QuizData }
  | { type: 'START_ACTIVITY'; payload: number }
  | { type: 'ANSWER_QUESTION'; payload: UserAnswer }
  | { type: 'NEXT_QUESTION' }
  | { type: 'NEXT_ROUND' }
  | { type: 'COMPLETE_ROUND' }
  | { type: 'COMPLETE_QUIZ' }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentActivity: 0,
  currentQuestion: 0,
  currentRound: 0,
  answers: [],
  isComplete: false,
  isRoundComplete: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START_ACTIVITY':
      return {
        currentActivity: action.payload,
        currentQuestion: 0,
        currentRound: action.payload === 1 ? 0 : undefined,
        answers: [],
        isComplete: false,
        isRoundComplete: false,
      };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case 'COMPLETE_ROUND':
      return {
        ...state,
        isRoundComplete: true,
      };
    case 'NEXT_ROUND':
      return {
        ...state,
        currentRound: (state.currentRound || 0) + 1,
        currentQuestion: 0,
        isRoundComplete: false,
      };
    case 'COMPLETE_QUIZ':
      return {
        ...state,
        isComplete: true,
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizData, setQuizDataState] = React.useState<QuizData | null>(null);
  const [quizState, dispatch] = useReducer(quizReducer, initialState);

  const setQuizData = (data: QuizData) => {
    setQuizDataState(data);
  };

  const startActivity = (activityIndex: number) => {
    dispatch({ type: 'START_ACTIVITY', payload: activityIndex });
  };

  const answerQuestion = (answer: UserAnswer) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: answer });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const completeRound = () => {
    dispatch({ type: 'COMPLETE_ROUND' });
  };

  const nextRound = () => {
    dispatch({ type: 'NEXT_ROUND' });
  };

  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  const getScore = () => {
    const correct = quizState.answers.filter(answer => answer.isCorrect).length;
    const total = quizState.answers.length;
    return { correct, total };
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        quizState,
        setQuizData,
        startActivity,
        answerQuestion,
        nextQuestion,
        nextRound,
        completeRound,
        resetQuiz,
        getScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};