import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import auth from "../../../Firebase/Firebase.inite";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googlError] =
    useSignInWithGoogle(auth);

  if (googleUser) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="opacity-25 bg-secondary w-50"
        ></div>
        <p className="mx-2 mt-2">or</p>
        <div
          style={{ height: "1px" }}
          className="opacity-25 bg-secondary w-50"
        ></div>
      </div>

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-info text-white mt-1 w-100 rounded-pill"
      >
        <img src={google} className="mx-2 rounded-circle" alt="" />
        CONTINUE WITH GOOGLE
      </button>

      {googleLoading ? <Spinner animation="border" variant="primary" /> : ""}
      {googlError ? (
        <p className="text-danger text-center">Error: {googlError.message}</p>
      ) : (
        ""
      )}

      <button className="btn btn-primary mt-2 w-100 rounded-pill">
        <img
          style={{ width: "30px" }}
          className="mx-2 rounded-circle"
          src={facebook}
          alt=""
        />
        CONTINUE WITH FACEBOOK
      </button>
      <button className="btn btn-dark mt-2 w-100 rounded-pill">
        <img src={github} className="mx-2 rounded-circle" alt="" />
        CONTINUE WITH GITHUB
      </button>
    </div>
  );
};

export default SocialLogin;
