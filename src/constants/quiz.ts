// Quiz-related constants
export const QUIZ_CONSTANTS = {
  ANSWER_DELAY: 800,
  SPLASH_DURATION: 3000,
  
  CARD_WIDTH: {
    MOBILE: '100%',
    TABLET: '400px',
    DESKTOP: '450px'
  },
  
  COLORS: {
    BORDER: '#c7e5ff',
    PRIMARY: '#4285F4',
    BACKGROUND: 'background.paper'
  },
  
  FONT_SIZES: {
    QUESTION_NUMBER: '1.2rem',
    QUESTION_TEXT: '1.1rem',
    ROUND_TITLE: '1.2rem',
    BUTTON_TEXT: '1.2rem'
  },
  
  FONT_WEIGHTS: {
    LIGHT: 300,
    MEDIUM: 500,
    BOLD: 800
  },
  
  SPACING: {
    CARD_PADDING: 6,
    QUESTION_PADDING: 2,
    ROUND_PADDING: 2.5
  },
  
  BORDER_RADIUS: {
    CARD: 0,
    BUTTON: 0
  }
} as const;

export const ACTIVITY_TYPES = {
  ONE: 'activity_one',
  TWO: 'activity_two'
} as const;

export const QUESTION_RESULTS = {
  CORRECT: 'CORRECT',
  FALSE: 'FALSE',
  TRUE: 'TRUE'
} as const;

export const ROUTES = {
  HOME: '/',
  ACTIVITY: '/activity',
  RESULTS: '/results'
} as const;
