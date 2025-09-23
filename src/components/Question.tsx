import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { Box, Button } from '@mui/material';
import { QuizCard } from './common/QuizCard';
import { QuestionDisplay } from './common/QuestionDisplay';
import {  Round } from '../types/quiz';
import { isActivityTwo, getCurrentQuestion, getQuizButtonStyles } from '../utils';
import { QUIZ_CONSTANTS } from '../constants';

const Question: React.FC = () => {
  const { activityId } = useParams<{ activityId: string }>();
  const navigate = useNavigate();
  const { quizData, quizState, answerQuestion, nextQuestion, nextRound, startActivity } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<'correct' | 'incorrect' | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  // Handle splash screen timeout
  React.useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, QUIZ_CONSTANTS.SPLASH_DURATION);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  const activityIndex = parseInt(activityId || '1') - 1;
  const activity = quizData?.activities[activityIndex];

  // Ensure the current activity is set correctly
  React.useEffect(() => {
    if (activityIndex >= 0 && activityIndex !== quizState.currentActivity) {
      startActivity(activityIndex);
    }
  }, [activityIndex, quizState.currentActivity, startActivity]);

  if (!activity) return null;

  const getCurrentQuestionData = () => {
    return getCurrentQuestion(activity, quizState.currentQuestion, quizState.currentRound);
  };

  const handleAnswerSelect = (answer: 'correct' | 'incorrect') => {
    if (selectedAnswer !== null) return;
    
    const currentQuestion = getCurrentQuestionData();
    if (!currentQuestion) return;

    setSelectedAnswer(answer);
    
    answerQuestion({
      questionIndex: quizState.currentQuestion,
      roundIndex: isActivityTwo(activity) ? quizState.currentRound : undefined,
      isCorrect: (answer === 'correct' && currentQuestion.is_correct) || 
                 (answer === 'incorrect' && !currentQuestion.is_correct),
      userChoice: answer,
    });

    setTimeout(() => {
      if (isActivityTwo(activity)) {
        const currentRound = activity.questions[quizState.currentRound || 0] as Round;
        const isLastQuestionInRound = quizState.currentQuestion >= currentRound.questions.length - 1;
        const isLastRound = (quizState.currentRound || 0) >= activity.questions.length - 1;

        if (isLastQuestionInRound && isLastRound) {
          navigate('/results');
        } else if (isLastQuestionInRound) {
          setShowSplash(true);  // Show splash for next round
          nextRound();
        } else {
          nextQuestion();
        }
      } else {
        const isLastQuestion = quizState.currentQuestion >= activity.questions.length - 1;
        if (isLastQuestion) {
          navigate('/results');
        } else {
          nextQuestion();
        }
      }
      setSelectedAnswer(null);
    }, QUIZ_CONSTANTS.ANSWER_DELAY);
  };

  const currentQuestion = getCurrentQuestionData();

  // Handle splash screen for Activity Two
  if (isActivityTwo(activity) && showSplash) {
    return (
      <QuizCard
        subtitle="ACTIVITY TWO"
        title={`ROUND ${(quizState.currentRound || 0) + 1}`}
      >
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            textAlign: 'center'
          }}
        >
          
        </Box>
      </QuizCard>
    );
  }

  // Remove round completion screen - direct transition to splash

  if (!currentQuestion) {
    return null;
  }

  return (
    <QuizCard
      subtitle={isActivityTwo(activity) ? `ACTIVITY TWO / ROUND ${(quizState.currentRound || 0) + 1}` : activity.activity_name}
      title={undefined}
    >
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          p:0,

        }}
      >
        <Box sx={{ flex: 1, mb: {md:0, xs:3 } }}>
          <QuestionDisplay
            questionNumber={quizState.currentQuestion + 1}
            questionText={currentQuestion.stimulus}
          />
        </Box>

          <Box 
           sx={{
             display: 'grid',
             gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
             gap: {md:8, xs:0},
             p:{md:1, xs:2},
             mx: { xs: -3, sm: -4, md: -6 },
             mb: { xs: -2, sm: -3, md: 0 },

             mt: 'auto',
           }}
         >
          <Button
            onClick={() => handleAnswerSelect('correct')}
            disabled={selectedAnswer !== null}
            sx={getQuizButtonStyles(selectedAnswer === 'correct')}
          >
            CORRECT
          </Button>
          <Button
            onClick={() => handleAnswerSelect('incorrect')}
            disabled={selectedAnswer !== null}
            sx={getQuizButtonStyles(selectedAnswer === 'incorrect')}
          >
            INCORRECT
          </Button>
        </Box>
      </Box>
    </QuizCard>
  );
};

export default Question;