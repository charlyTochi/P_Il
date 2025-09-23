import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { ActivityOne, ActivityTwo, Round } from '../types/quiz';

const isActivityTwo = (act: ActivityOne | ActivityTwo): act is ActivityTwo => {
  return 'questions' in act && 
         Array.isArray(act.questions) && 
         act.questions.length > 0 && 
         'round_title' in act.questions[0];
};

export const useQuizNavigation = (activity: ActivityOne | ActivityTwo) => {
  const navigate = useNavigate();
  const { quizState, nextQuestion, completeRound } = useQuiz();

  const handleQuestionComplete = useCallback(() => {
    if (isActivityTwo(activity)) {
      const currentRound = activity.questions[quizState.currentRound || 0] as Round;
      const isLastQuestionInRound = quizState.currentQuestion >= currentRound.questions.length - 1;
      const isLastRound = (quizState.currentRound || 0) >= activity.questions.length - 1;

      if (isLastQuestionInRound && isLastRound) {
        navigate('/results');
      } else if (isLastQuestionInRound) {
        completeRound();
      } else {
        nextQuestion();
      }
    } else {
      const isLastQuestion = quizState.currentQuestion >= (activity as ActivityOne).questions.length - 1;
      
      if (isLastQuestion) {
        navigate('/results');
      } else {
        nextQuestion();
      }
    }
  }, [activity, quizState, navigate, nextQuestion, completeRound]);

  return {
    handleQuestionComplete,
    isActivityTwo,
  };
};