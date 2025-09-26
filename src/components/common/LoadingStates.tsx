import React from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { QuizCard } from './QuizCard';

interface LoadingStateProps {
  message?: string;
}

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = "Loading quiz data..." 
}) => {
  return (
    <QuizCard
      title={
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <CircularProgress 
            size={60} 
            thickness={4}
            sx={{ 
              color: 'primary.main',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
              }
            }} 
          />
          <Typography 
            variant="h6" 
            color="primary"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            {message}
          </Typography>
        </Box>
      }
    >
      <Box sx={{ height: '100px' }} />
    </QuizCard>
  );
};

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  message, 
  onRetry 
}) => {
  return (
    <QuizCard
      title={
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'error.light',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 1
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'error.main',
                fontWeight: 'bold',
                fontSize: '2.5rem'
              }}
            >
              !
            </Typography>
          </Box>
          <Typography 
            variant="h6" 
            color="error"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              mb: 2
            }}
          >
            {message}
          </Typography>
          {onRetry && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={onRetry}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 2,
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 4,
                }
              }}
            >
              Try Again
            </Button>
          )}
        </Box>
      }
    >
      <Box sx={{ height: '100px' }} />
    </QuizCard>
  );
};
