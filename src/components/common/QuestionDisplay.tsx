import React from 'react';
import { Box, Typography } from '@mui/material';

interface QuestionDisplayProps {
  questionNumber: number;
  questionText: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ 
  questionNumber, 
  questionText 
}) => {
  // Split the text to identify the part that should be highlighted
  const parts = questionText.split(/(\*.*?\*)/);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography 
        variant="h1" 
        color="primary"
        sx={{
          fontSize: { xs: '1.5rem', sm: '1.9rem' },
          fontWeight: 700,
          mb: { xs: 3, sm: 4 },
          pb:4,
          letterSpacing: '-0.02em'
        }}
      >
        Q{questionNumber}.
      </Typography>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: { xs: 0, sm: 0 },
          mx: { xs: 0, sm: -3, md: -6 },
          p: { xs: 2, sm: 3, },
          borderTop: { xs: 'none', sm: '1px solid #c7e5ff', md:'1px solid #c7e5ff' },
          borderBottom: { xs: 'none', sm: '1px solid #c7e5ff', md:'1px solid #c7e5ff' },
          border: { xs: '1px solid #c7e5ff', sm: 'none' },
          borderLeft: { sm: 'none' },
          borderRight: { sm: 'none' },
        }}
      >
        <Typography 
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            color: 'primary.main',
            pl:  { xs: 0, sm: 0, md:3 },
            lineHeight: { xs: 1.5, sm: 1.6 },
            wordBreak: 'break-word',
            '& .highlight': {
              color: 'primary.main',
              fontWeight: 800,
            }
          }}
        >
          {parts.map((part, index) => {
            if (part.startsWith('*') && part.endsWith('*')) {
              // Remove asterisks and wrap in span
              return (
                <span key={index} className="highlight">
                  {part.slice(1, -1)}
                </span>
              );
            }
            return part;
          })}
        </Typography>
      </Box>
    </Box>
  );
};