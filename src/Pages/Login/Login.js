import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.inite";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let from = location.state?.from?.pathname || "/";

  const handleNavigate = () => {
    navigate("/register");
  };

  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-primary text-center mt-2">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
          <p>{loading ? "loading..." : ""}</p>
          <p>{error?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button className="w-50 d-block mx-auto mb-4" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className=" text-center mt-2">
        Now to Genius car?{" "}
        <Link
          to="/register"
          onClick={handleNavigate}
          className="text-danger text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
