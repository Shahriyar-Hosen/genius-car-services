import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.inite";
import Loading from "../../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center d-block w-100 mx-auto">
        <h1 className="text-danger">Your Email is not verified</h1>
        <h3 className="text-success">Please Verify Your Email</h3>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Resend email verification
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
