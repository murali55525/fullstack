import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import './LoginButton.css';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithRedirect();
    navigate('/workoutForm'); // Ensure it directly navigates to WorkoutForm
  };

  return (
    <div className="login-container">
      <img
        src="https://as2.ftcdn.net/v2/jpg/04/30/56/19/1000_F_430561955_D63q2kkC9gSFpb84Sr247aFLTjRyMOsP.jpg"
        alt="Login"
        className="login-image"
      />
      <button onClick={handleLogin} className="login-button">
        Log in
      </button>
    </div>
  );
}

export default LoginButton;
