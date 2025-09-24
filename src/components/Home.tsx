import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { fetchQuizData } from '../services/quizService';
import { Box, Container, Typography, Button, Paper } from '@mui/material';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setQuizData, quizData } = useQuiz();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load quiz data');
        setLoading(false);
      }
    };

    if (!quizData) {
      loadQuizData();
    } else {
      setLoading(false);
    }
  }, [quizData, setQuizData]);

  const handleActivityStart = (activityIndex: number) => {
    navigate(`/activity/${activityIndex + 1}`);
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Typography color="primary">Loading quiz data...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'primary.light',
        p: 2,
      }}
    >
      <Container maxWidth="xs" sx={{ width: '350px' }}>
        <Paper
          elevation={0}
          sx={{
            p: 0,
            borderRadius: 0,
            bgcolor: 'white',
            borderWidth: 1,
            borderColor: '#c7e5ff',
            borderStyle: 'solid',
            overflow: 'hidden',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              p: 4,
              textAlign: 'center',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="subtitle1"
              color="primary"
              gutterBottom
              fontWeight={800}
              sx={{
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                mb: 7,
              }}
            >
              CAES
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'primary.main',
                mb: 2,
              }}
            >
              Error Find
            </Typography>
          </Box>

          <Box
            sx={{
              width: '100%',
              mt: 'auto',
            }}
          >
            <Button
              fullWidth
              onClick={() => handleActivityStart(0)}
              sx={{
                py: 2.5,
                px: 2,
                borderRadius: 0,
                borderTop: '1px solid #c7e5ff',
                borderBottom: '1px solid #c7e5ff',
                color: 'primary.main',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 400,
                backgroundColor: 'background.paper',
                letterSpacing: '0.02em',
                '&:hover': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              ACTIVITY ONE
            </Button>
            <Button
              fullWidth
              onClick={() => handleActivityStart(1)}
              sx={{
                py: 2.5,
                px: 2,
                borderRadius: 0,
                color: 'primary.main',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 400,
                backgroundColor: 'background.paper',
                letterSpacing: '0.02em',
                '&:hover': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              ACTIVITY TWO
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;