import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './home'; // Create a Home component for the main page
import Learn from './components/learn-dashboard/learn'; // Create a Learn component for the /learn page
import { withAuthenticator } from '@aws-amplify/ui-react';

const myTheme = {
  name: 'my-theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '#f0f0f0',
          80: '#1f2937',
          100: '#111827', // Customize the primary brand color
        },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.brand.primary.100}' },
          color: { value: '#ffffff' },
        },
      },
    },
  },
};

function App() {
  
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
          {/* Login route */}
          <Route
            path="/login"
            element={
              <Authenticator loginMechanisms={['email']} signUpAttributes={['email']}>
                {({ signOut, user }) => (
                  <Navigate to="/learn" replace />
                )}
              </Authenticator>
            }
          />

          {/* Protected Learn route */}
          <Route
            path="/learn"
            element={
              <Authenticator loginMechanisms={['email']} signUpAttributes={['email']}>
                {({ signOut, user }) => (
                  <>
                  <Learn user={user} signOut={signOut} />
                  </>
                )}
              </Authenticator>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
