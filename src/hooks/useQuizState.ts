import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { ActivityOne, ActivityTwo, Question as QuestionType, Round } from '../types/quiz';

export const useQuizState = (
  activityIndex: number,
  activity: ActivityOne | ActivityTwo
) => {
  const { quizState, startActivity } = useQuiz();

  useEffect(() => {
    if (activityIndex >= 0) {
      startActivity(activityIndex);
    }
  }, [activityIndex, startActivity]);

  const isActivityTwo = (act: ActivityOne | ActivityTwo): act is ActivityTwo => {
    return 'questions' in act && 
           Array.isArray(act.questions) && 
           act.questions.length > 0 && 
           'round_title' in act.questions[0];
  };

  const getCurrentQuestion = (): QuestionType | null => {
    if (isActivityTwo(activity)) {
      const currentRound = activity.questions[quizState.currentRound || 0] as Round;
      return currentRound?.questions[quizState.currentQuestion] || null;
    } else {
      return (activity as ActivityOne).questions[quizState.currentQuestion] || null;
    }
  };

  const getCurrentQuestionNumber = (): number => {
    if (isActivityTwo(activity)) {
      let questionNumber = 1;
      for (let i = 0; i < (quizState.currentRound || 0); i++) {
        questionNumber += (activity.questions[i] as Round).questions.length;
      }
      return questionNumber + quizState.currentQuestion;
    } else {
      return quizState.currentQuestion + 1;
    }
  };

  return {
    currentQuestion: getCurrentQuestion(),
    currentQuestionNumber: getCurrentQuestionNumber(),
    isActivityTwo,
  };
};
