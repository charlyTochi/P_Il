# Error Find Quiz Application

A React TypeScript quiz application that helps users identify grammatical errors in English sentences. The application features two different quiz flows with an intuitive user interface.

## 🚀 Live Demo

The application is built to be deployed on static hosting services like Netlify, Vercel, or GitHub Pages.

## 📋 Features

- **Two Quiz Activities**: 
  - Activity One: Simple question flow
  - Activity Two: Multi-round question flow
- **Real-time Scoring**: Track correct and incorrect answers
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript Support**: Full type safety throughout the application
- **Modern UI**: Clean, professional interface with smooth animations

## 🛠 Technology Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Context API** for state management
- **Axios** for API calls
- **CSS3** with modern styling and animations

## 🏗 Architecture

The application follows a clean, modular architecture:

```
src/
├── components/          # React components
│   ├── Home.tsx        # Home screen with activity selection
│   ├── Question.tsx    # Question display and answer handling
│   └── Results.tsx     # Results screen with score display
├── context/            # React Context for state management
│   └── QuizContext.tsx # Global quiz state and actions
├── services/           # API services
│   └── quizService.ts  # Quiz data fetching
├── types/              # TypeScript type definitions
│   └── quiz.ts         # Quiz-related interfaces
└── App.tsx            # Main app component with routing
```

## 🎯 Quiz Flow

### Activity One
1. User selects "Activity One" from home screen
2. Presents 5 questions sequentially
3. Each question asks user to identify if a sentence is correct or incorrect
4. Shows results screen after all questions are answered

### Activity Two  
1. User selects "Activity Two" from home screen
2. Presents questions in multiple rounds
3. Each round contains multiple questions
4. User progresses through rounds sequentially
5. Shows results screen after all rounds are completed

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd error-find-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## 🎨 Design Decisions

### State Management
- **React Context**: Chosen for its simplicity and built-in React integration
- **useReducer**: Used for complex state transitions in the quiz flow
- **Local State**: Used for component-specific state like loading and form inputs

### Component Structure
- **Reusable Components**: Question component handles both activity types
- **Type Guards**: Used to differentiate between activity structures
- **Error Boundaries**: Implemented for graceful error handling

### Styling Approach
- **CSS Modules**: Each component has its own CSS file
- **Responsive Design**: Mobile-first approach with media queries
- **Modern CSS**: Uses flexbox, gradients, and smooth transitions

### API Integration
- **Axios**: Chosen for its robust error handling and request/response interceptors
- **TypeScript Interfaces**: Strong typing for API responses
- **Error Handling**: Graceful fallbacks for network issues

## 🔧 Configuration

### API Endpoint
The quiz data is fetched from:
```
https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json
```

### Environment Variables
No environment variables are required for basic functionality.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📦 Deployment

### Static Hosting Services

**Netlify:**
1. Run `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure redirects for React Router

**Vercel:**
1. Connect your GitHub repository
2. Vercel will automatically build and deploy

**GitHub Pages:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://username.github.io/repository-name"`
3. Add deploy scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run: `npm run deploy`

## 🐛 Error Handling

The application includes comprehensive error handling:

- **Network Errors**: Graceful fallbacks when API is unavailable
- **Invalid Routes**: Redirects to home page for unknown URLs
- **Missing Data**: Displays appropriate messages for missing questions
- **Loading States**: Visual feedback during data fetching

## 🎯 Future Enhancements

- Add question timer functionality
- Implement user authentication
- Add detailed feedback explanations
- Include progress tracking across sessions
- Add sound effects and animations
- Support for multiple languages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Development Team

Built with attention to architectural best practices, code reusability, and user experience.

---

For questions or support, please open an issue in the repository.