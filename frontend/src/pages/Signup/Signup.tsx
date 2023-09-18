import axios, { AxiosResponse } from "axios";
import styles from "../Login/Login.module.css";
import { RxCross2 } from "react-icons/rx";
import {
  SignupInterface,
  SignupResponseInterface,
  userProps,
} from "../../types/user.types";
import { useState } from "react";

const initialSignupState = {
  username: "",
  email: "",
  password: "",
};

export const Signup = ({ handleShowSignup, handleShowLogin }: userProps) => {
  const [userDetails, setUserDetailes] =
    useState<SignupInterface>(initialSignupState);

  const handleAlreadyAccount = (): void => {
    handleShowSignup();
    handleShowLogin();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl: string = "http://localhost:8080/users/register";
    try {
      const response: AxiosResponse<SignupResponseInterface> = await axios.post(
        apiUrl,
        userDetails
      );

      if (response.status >= 200 && response.status < 300) {
        alert(response.data.message);
        setUserDetailes(initialSignupState);
        handleAlreadyAccount();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserDetailes((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <div className={styles.suContainer}>
          <div>
            <h2>Sign up</h2>
            <button onClick={handleShowSignup}>
              {" "}
              <RxCross2 />
            </button>
          </div>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="text"
                required
                name="username"
                value={userDetails.username}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                required
                name="password"
                value={userDetails.password}
                onChange={handleChange}
              />
            </label>

            <input type="submit" value="Signup" />
          </form>

          <p>
            Already have an account?{" "}
            <span onClick={handleAlreadyAccount}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};
