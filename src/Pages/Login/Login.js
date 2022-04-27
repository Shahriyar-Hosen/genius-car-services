import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/Firebase.inite";
import Loading from "../Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleNavigate = () => {
    navigate("/register");
  };

  if (user) {
    // navigate(from, { replace: true });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("https://shrouded-beach-15194.herokuapp.com/login", { email });
    console.log("Success:", data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });

  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  return (
    <div className="w-50 mx-auto">
      <PageTitle title="Home"></PageTitle>
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
        </Form.Group>
        <p>{error?.message}</p>
        <p>{resetError?.message}</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          className="w-100 rounded-pill d-block mx-auto mb-4"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className=" text-center mt-2">
        Now to Genius car?{" "}
        <Link
          to="/register"
          onClick={handleNavigate}
          className="text-primary text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p className=" text-center">
        Forget Password?{" "}
        <Button
          onClick={resetPassword}
          variant="link"
          className="text-decoration-none"
        >
          Reset Password
        </Button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
