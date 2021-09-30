import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";



export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="sign-up-container page-container">
      <div className="sign-up-content">
        <h2 className="sign-up-title">Sign up</h2>

        {error && <p className="alert">{error}</p>}
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailRef} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
          <label htmlFor="password-confirm">Confirm password</label>
          <input
            type="password"
            id="password-confirm"
            ref={passwordConfirmRef}
            required
          />

          <button className="button sign-up-button" disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
        <div className="auth-redirect">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
      <img src="assets/images/pexels-cottonbro-4505458.jpg" alt="room with plant"/>
    </div>
  );
}
