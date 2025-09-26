import { QuizData } from '../types/quiz';
import { API_ENDPOINT } from '../constants/api';

export const fetchQuizData = async (): Promise<QuizData> => {
  try {
    const response = await fetch(`${API_ENDPOINT}/quiz-data`);
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
