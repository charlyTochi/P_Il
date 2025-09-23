import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { Box, Typography, Button } from '@mui/material';
import { QuizCard } from './common/QuizCard';
import { RoundResults } from './common/RoundResults';
import { ActivityOne } from '../types/quiz';
import { isActivityTwo, getQuestionResult, getResultsWrapperStyles, getHomeButtonStyles } from '../utils';
import { ROUTES } from '../constants';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { quizState, resetQuiz, quizData } = useQuiz();
  
  const currentActivity = quizData?.activities[quizState.currentActivity];

  const handleGoHome = () => {
    resetQuiz();
    navigate(ROUTES.HOME);
  };

  const getQuestionResultForDisplay = (questionIndex: number, roundIndex?: number): string => {
    return getQuestionResult(quizState.answers, questionIndex, roundIndex);
  };

  if (!currentActivity) return null;

  if (isActivityTwo(currentActivity)) {
    // Activity Two Results
    const activityTwo = currentActivity;

    return (
        <Box sx={getResultsWrapperStyles()}>
      <QuizCard
        subtitle={<Typography 
          variant="subtitle1" 
          color="primary" 
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: '0.01em',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            textTransform: 'uppercase',
            textAlign: 'center',
            width: '100%'
          }}
        >
          ACTIVITY TWO
        </Typography>}
        title={<Typography 
          variant="h1" 
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '2.7rem' },
            fontWeight: 800,
            color: 'primary.main',
            lineHeight: 1.2,
            paddingTop: { xs: 0, sm: 0, md: 2 },
            textAlign: 'center',
            width: '100%',
            mb: 6
          }}
        >
          Results
        </Typography>}
      >
        <RoundResults
          roundNumber={1}
          questions={activityTwo.questions[0].questions}
          getQuestionResult={getQuestionResultForDisplay}
          isActivityTwo={true}
        />

        {activityTwo.questions[1] && (
          <RoundResults
            roundNumber={2}
            questions={activityTwo.questions[1].questions}
            getQuestionResult={getQuestionResultForDisplay}
            isActivityTwo={true}
          />
        )}

        <Button
          fullWidth
          size="large"
          onClick={handleGoHome}
          sx={getHomeButtonStyles()}
        >
          HOME
        </Button>
      </QuizCard>
      </Box>
    );
  }

  // Activity One Results
  const activityOne = currentActivity as ActivityOne;

    return (
        <Box sx={getResultsWrapperStyles()}>
      <QuizCard
        subtitle={<Typography 
          variant="subtitle1" 
          color="primary" 
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: '0.01em',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            textTransform: 'uppercase',
            textAlign: 'center',
            width: '100%'
          }}
        >
          ACTIVITY ONE
        </Typography>}
        title={<Typography 
          variant="h1" 
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '2.6rem' },
            fontWeight: 800,
            color: 'primary.main',
            lineHeight: 1.2,
            paddingTop: { xs: 0, sm: 0, md: 4 },
            textAlign: 'center',
            width: '100%'
          }}
        >
          Results
        </Typography>}
    >
        <RoundResults
          roundNumber={1}
          questions={activityOne.questions}
          getQuestionResult={getQuestionResultForDisplay}
          isActivityTwo={false}
        />

      <Button
        fullWidth
        size="large"
        onClick={handleGoHome}
          sx={getHomeButtonStyles()}
      >
        HOME
      </Button>
      </QuizCard>
      </Box>
  );
};

export default Results;