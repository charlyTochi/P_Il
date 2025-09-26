import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';

interface QuizCardProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
}

export const QuizCard: React.FC<QuizCardProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          bgcolor: 'primary.light',
        }}
      />
      <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        p: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Container 
        maxWidth={false} 
        sx={{ 
          m: 0, 
          p: 0, 
          maxWidth: { xs: '100%', sm: '600px', md: '700px' },
          width: '100%',
          position: 'relative',
        }} 
      >
        <Paper 
          elevation={0}
          sx={{
            borderRadius: { xs: 0, sm: 0 },
            borderWidth: 1,
            p: { xs: 3, sm: 4, md: 6 },
            pb: { xs: 2, sm: 3, md: 0 },
            borderColor: '#c7e5ff',
            borderStyle: 'solid',
            overflow: 'hidden',
            minHeight: { xs: 'auto', sm: '340px' },
            display: 'flex',
            backgroundColor: 'background.default',
            mb: '0',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Box mb={{ xs: 2, sm: 3,  }}>
            {subtitle && (
              typeof subtitle === 'string' ? (
                <Typography 
                  variant="subtitle1" 
                  color="primary" 
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    textTransform: 'uppercase',
                  }}
                >
                  {subtitle}
                </Typography>
              ) : subtitle
            )}
            {title && (
              typeof title === 'string' ? (
                <Typography 
                  variant="h1" 
                  component="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '2.4rem' },
                    fontWeight: 800,
                    color: 'primary.main',
                    lineHeight: 1.2,
                    paddingTop: { xs: 0, sm: 0, md: 4 },
                  }}
                >
                  {title}
                </Typography>
              ) : title
            )}
          </Box>
          {children}
        </Paper>
      </Container>
    </Box>
    </>
  );
};