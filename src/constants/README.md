# Constants Directory

This directory contains application-wide constants and configuration values.

## Files

### `quiz.ts`
Contains quiz-related constants organized by category:

#### Timing Constants
- `ANSWER_DELAY` - Delay before showing next question (800ms)
- `SPLASH_DURATION` - Duration of splash screen (3000ms)

#### UI Constants
- `CARD_WIDTH` - Responsive card widths for different screen sizes
- `COLORS` - Color palette including borders and primary colors
- `FONT_SIZES` - Typography sizes for different elements
- `FONT_WEIGHTS` - Font weight values
- `SPACING` - Padding and margin values
- `BORDER_RADIUS` - Border radius values

#### Activity Types
- `ACTIVITY_TYPES` - Activity type identifiers
- `QUESTION_RESULTS` - Question result states (CORRECT, FALSE, TRUE)
- `ROUTES` - Application route paths

## Usage

```typescript
import { QUIZ_CONSTANTS, ROUTES } from '../constants';

// Use timing constants
setTimeout(() => {}, QUIZ_CONSTANTS.ANSWER_DELAY);

// Use route constants
navigate(ROUTES.HOME);
```

## Benefits

- **Centralized Configuration**: All magic numbers and strings in one place
- **Type Safety**: Constants are typed and immutable
- **Maintainability**: Easy to update values across the application
- **Consistency**: Ensures consistent styling and behavior
