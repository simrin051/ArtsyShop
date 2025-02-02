import "../auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProductContext, useToast, useUserContext } from "../../../context";
import { useDocumentTitle } from "../../../custom_hooks";
import {
  ButtonPrimary,
  InputField,
  OutlineButtonPrimary,
  PasswordInput,
} from "../../../components";
import { signIn } from "../../../services";

export const SignIn = () => {
  useDocumentTitle("| Sign In");
  const navigate = useNavigate();
  const [error, setSigninError] = useState();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const guestLogin = {
    email: "adarshbalak@gmail.com",
    password: "adarshBalaki123",
  };

  const { productDispatch } = useProductContext();
  const { setLoginState, userDataDispatch } = useUserContext();
  const {showToast} =useToast();
  
  return (
    <main className="main center">
      <form
        className="flex-col signup-sec"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("this");
          signIn({
            setSigninError,
            data: inputValues,
            productDispatch,
            userDataDispatch,
            setLoginState,
            showToast,
            navigate,
          });
        }}
      >
        <p className="body-l">Login to my user account.</p>

        <InputField
          value={inputValues.email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
          label={"Email"}
        />
        <PasswordInput
          value={inputValues.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          label={"Password"}
        />
        <label className="flex-align-center">
          <input type="checkbox" />
          <span className="checkbox-text"> Keep me logged in. </span>
        </label>
        <ButtonPrimary type="submit">
          <span>validate</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </ButtonPrimary>
        <OutlineButtonPrimary onClick={() => setInputValues(guestLogin)}>
          Login as Guest
        </OutlineButtonPrimary>
        <Link to="me" className="link-text-primary">
          Forgot your password?
        </Link>
        <div>
          <p className="body-md">Still don't have an account ?</p>
          <div
            className="link-text-primary"
            onClick={() => navigate("/sign-up")}
          >
            SIGN UP
          </div>
        </div>
        <div className="err-msg">{error}</div>
      </form>
    </main>
  );
};
