import React from 'react';
import { Box, Typography } from '@mui/material';
import { getQuestionNumberStyles, getQuestionResultStyles, getRoundTitleStyles, getResultsContainerStyles, getQuestionRowStyles } from '../../utils';
import { QUIZ_CONSTANTS } from '../../constants';

interface RoundResultsProps {
  roundNumber: number;
  questions: any[];
  getQuestionResult: (questionIndex: number, roundIndex?: number) => string;
  isActivityTwo?: boolean;
}

export const RoundResults: React.FC<RoundResultsProps> = ({ 
  roundNumber, 
  questions, 
  getQuestionResult,
  isActivityTwo = false
}) => {
  return (
    <Box sx={getResultsContainerStyles()}>
      <Typography
        variant="h4"
        color="primary"
        gutterBottom
        align="center"
        sx={{
          ...getRoundTitleStyles(),
          borderTop: roundNumber === 1 ? `1px solid ${QUIZ_CONSTANTS.COLORS.BORDER}` : 'none'
        }}
      >
        ROUND {roundNumber}
      </Typography>
      {questions.map((_, questionIndex) => (
        <Box
          key={questionIndex}
          sx={getQuestionRowStyles()}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={getQuestionNumberStyles()}
          >
            Q{questionIndex + 1}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={getQuestionResultStyles()}
          >
            {isActivityTwo ? getQuestionResult(questionIndex, roundNumber - 1) : getQuestionResult(questionIndex)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
