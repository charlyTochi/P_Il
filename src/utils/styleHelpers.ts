import { SxProps, Theme } from '@mui/material';

/**
 * Common button styles for quiz buttons
 */
export const getQuizButtonStyles = (isSelected?: boolean): SxProps<Theme> => ({
  minHeight: { xs: '60px', sm: '80px' },
  py: { xs: 2, sm: 3 },
  px: { xs: 2, sm: 0 },
  width: '100%',
  borderRadius: 0,
  fontWeight: 800,
  fontSize: { xs: '1rem', sm: '1.15rem' },
  color: 'primary.main',
  letterSpacing: '0.002em',
  border: 'none',
  textTransform: 'uppercase',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    bgcolor: 'transparent',
  },
  ...(isSelected && {
    bgcolor: 'background.paper',
    color: 'white',
    '&:hover': {
      bgcolor: 'background.paper',
    }
  })
});

/**
 * Common typography styles for question numbers
 */
export const getQuestionNumberStyles = (): SxProps<Theme> => ({
  fontSize: '1.2rem',
  fontWeight: 300,
  letterSpacing: '0.1em'
});

/**
 * Common typography styles for question results
 */
export const getQuestionResultStyles = (): SxProps<Theme> => ({
  fontSize: '1.2rem',
  fontWeight: 800,
  letterSpacing: '0.1em'
});

/**
 * Common typography styles for round titles
 */
export const getRoundTitleStyles = (): SxProps<Theme> => ({
  fontSize: '1.2rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
  mb: 0,
  py: 2.5,
  px: 6,
  borderBottom: '1px solid #c7e5ff'
});

/**
 * Common container styles for results sections
 */
export const getResultsContainerStyles = (): SxProps<Theme> => ({
  mx: -6,
  backgroundColor: 'background.paper'
});

/**
 * Common styles for question rows
 */
export const getQuestionRowStyles = (): SxProps<Theme> => ({
  display: 'flex',
  justifyContent: 'space-between',
  py: 2,
  px: 6,
  borderBottom: '1px solid #c7e5ff'
});

/**
 * Common styles for HOME button
 */
export const getHomeButtonStyles = (): SxProps<Theme> => ({
  mt: 'auto',
  py: 2,
  borderRadius: 0,
  fontSize: '1.2rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
  textTransform: 'uppercase'
});

/**
 * Responsive container styles for results
 */
export const getResultsWrapperStyles = (): SxProps<Theme> => ({
  maxWidth: { xs: '100%', sm: '400px', md: '450px' },
  margin: '0 auto',
  width: '100%'
});
