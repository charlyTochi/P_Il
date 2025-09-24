export interface Question {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: any[];
  feedback: string;
}

export interface Round {
  round_title: string;
  order: number;
  questions: Question[];
}

export interface ActivityOne {
  activity_name: string;
  order: number;
  questions: Question[];
}

export interface ActivityTwo {
  activity_name: string;
  order: number;
  questions: Round[];
}

export interface QuizData {
  name: string;
  heading: string;
  activities: (ActivityOne | ActivityTwo)[];
}

export interface UserAnswer {
  questionIndex: number;
  roundIndex?: number;
  isCorrect: boolean;
  userChoice: 'correct' | 'incorrect';
}

export interface QuizState {
  currentActivity: number;
  currentQuestion: number;
  currentRound?: number;
  answers: UserAnswer[];
  isComplete: boolean;
  isRoundComplete?: boolean; // New state for Activity Two round completion
}
