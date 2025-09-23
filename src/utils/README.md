# Utils Directory

This directory contains reusable utility functions and helpers for the quiz application.

## Files

### `quizHelpers.ts`
Contains quiz-specific business logic functions:
- `isActivityTwo()` - Type guard to check if an activity is Activity Two
- `getCurrentQuestion()` - Get the current question from an activity
- `calculateQuestionResult()` - Calculate question result based on user choice
- `getQuestionResult()` - Get question result from stored answers
- `isLastQuestionInRound()` - Check if it's the last question in a round
- `isLastRound()` - Check if it's the last round in Activity Two
- `getTotalQuestions()` - Get total questions count for an activity
- `getCorrectAnswersCount()` - Get correct answers count
- `calculateScorePercentage()` - Calculate score percentage

### `styleHelpers.ts`
Contains reusable style functions for consistent UI:
- `getQuizButtonStyles()` - Common button styles for quiz buttons
- `getQuestionNumberStyles()` - Typography styles for question numbers
- `getQuestionResultStyles()` - Typography styles for question results
- `getRoundTitleStyles()` - Typography styles for round titles
- `getResultsContainerStyles()` - Container styles for results sections
- `getQuestionRowStyles()` - Styles for question rows
- `getHomeButtonStyles()` - Styles for HOME button
- `getResultsWrapperStyles()` - Responsive container styles for results

## Usage

```typescript
import { isActivityTwo, getQuizButtonStyles } from '../utils';
import { QUIZ_CONSTANTS } from '../constants';
```
