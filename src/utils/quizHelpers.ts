import { ActivityOne, ActivityTwo, Round } from '../types/quiz';
import { QUESTION_RESULTS } from '../constants/quiz';

/**
 * Type guard to check if an activity is Activity Two
 */
export const isActivityTwo = (act: ActivityOne | ActivityTwo): act is ActivityTwo => {
  return 'questions' in act && 
         Array.isArray(act.questions) && 
         act.questions.length > 0 && 
         'round_title' in act.questions[0];
};

/**
 * Get the current question from an activity
 */
export const getCurrentQuestion = (
  activity: ActivityOne | ActivityTwo, 
  currentQuestion: number, 
  currentRound?: number
) => {
  if (isActivityTwo(activity)) {
    const round = activity.questions[currentRound || 0] as Round;
    return round?.questions[currentQuestion] || null;
  }
  return (activity as ActivityOne).questions[currentQuestion] || null;
};

/**
 * Calculate question result based on user choice and correct answer
 */
export const calculateQuestionResult = (
  userChoice: 'correct' | 'incorrect',
  isCorrect: boolean
): string => {
  if (isCorrect) {
    return QUESTION_RESULTS.CORRECT;
  }
  return userChoice === 'correct' ? QUESTION_RESULTS.FALSE : QUESTION_RESULTS.TRUE;
};

/**
 * Get question result from stored answers
 */
export const getQuestionResult = (
  answers: Array<{ questionIndex: number; roundIndex?: number; isCorrect: boolean; userChoice: 'correct' | 'incorrect' }>,
  questionIndex: number,
  roundIndex?: number
): string => {
  const answer = answers.find(a => 
    a.questionIndex === questionIndex && 
    a.roundIndex === roundIndex
  );
  
  if (!answer) return QUESTION_RESULTS.FALSE;
  
  return calculateQuestionResult(answer.userChoice, answer.isCorrect);
};

/**
 * Check if it's the last question in a round
 */
export const isLastQuestionInRound = (
  activity: ActivityOne | ActivityTwo,
  currentQuestion: number,
  currentRound?: number
): boolean => {
  if (isActivityTwo(activity)) {
    const round = activity.questions[currentRound || 0] as Round;
    return currentQuestion >= round.questions.length - 1;
  }
  return currentQuestion >= (activity as ActivityOne).questions.length - 1;
};

/**
 * Check if it's the last round in Activity Two
 */
export const isLastRound = (
  activity: ActivityTwo,
  currentRound: number
): boolean => {
  return currentRound >= activity.questions.length - 1;
};

/**
 * Get total questions count for an activity
 */
export const getTotalQuestions = (activity: ActivityOne | ActivityTwo): number => {
  if (isActivityTwo(activity)) {
    return activity.questions.reduce(
      (total, round) => total + round.questions.length, 
      0
    );
  }
  return (activity as ActivityOne).questions.length;
};

/**
 * Get correct answers count
 */
export const getCorrectAnswersCount = (
  answers: Array<{ isCorrect: boolean }>
): number => {
  return answers.filter(answer => answer.isCorrect).length;
};

/**
 * Calculate score percentage
 */
export const calculateScorePercentage = (correct: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};
