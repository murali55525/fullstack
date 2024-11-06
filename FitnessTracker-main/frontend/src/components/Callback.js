import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const { handleRedirectCallback, isAuthenticated, isLoading, error, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Ensure that handleRedirectCallback is called first
        await handleRedirectCallback();

        // After handling the redirect, check if the user is authenticated
        if (isAuthenticated) {
          console.log("User authenticated:", user);
          navigate('/');  // Redirect to the home page after successful login
        }
      } catch (error) {
        console.error('Error during callback:', error);
        alert('Authentication failed: ' + error.message); // Show error to user
      }
    };

    if (!isAuthenticated && !isLoading) {
      console.log("Processing callback...");
      handleCallback();  // Handle the callback if not already authenticated
    }

  }, [isAuthenticated, isLoading, handleRedirectCallback, navigate, user]);

  if (isLoading) {
    return <div>Loading...</div>;  // Show loading indicator while handling callback
  }

  if (error) {
    return <div>Error: {error.message}</div>;  // Display any error that occurs
  }

  return <div>Redirecting...</div>;  // Default message while processing the callback
};

export default Callback;
