import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AnswerButtonsProps {
  selectedAnswer: 'correct' | 'incorrect' | null;
  onAnswerSelect: (answer: 'correct' | 'incorrect') => void;
  disabled?: boolean;
}

const StyledAnswerButton = styled(Button)(({ theme }) => ({
  width: '100%',
  borderWidth: '2px !important',
  '&.selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    }
  }
}));

export const AnswerButtons: React.FC<AnswerButtonsProps> = ({
  selectedAnswer,
  onAnswerSelect,
  disabled
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 2,
      }}
    >
      <StyledAnswerButton
        variant="outlined"
        color="primary"
        onClick={() => onAnswerSelect('correct')}
        disabled={disabled || selectedAnswer !== null}
        className={selectedAnswer === 'correct' ? 'selected' : ''}
      >
        CORRECT
      </StyledAnswerButton>
      <StyledAnswerButton
        variant="outlined"
        color="primary"
        onClick={() => onAnswerSelect('incorrect')}
        disabled={disabled || selectedAnswer !== null}
        className={selectedAnswer === 'incorrect' ? 'selected' : ''}
      >
        INCORRECT
      </StyledAnswerButton>
    </Box>
  );
};
