import { QuizData } from '../types/quiz';

export const fetchQuizData = async (): Promise<QuizData> => {
  try {
    const response = await fetch('/quiz-data.json');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz data');
    }
    const data: QuizData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw new Error('Failed to fetch quiz data');
  }
};
