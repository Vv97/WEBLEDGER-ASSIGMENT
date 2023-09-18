import {
  SignupInterface,
  SignupResponseInterface,
  userProps,
} from "../../types/user.types";
import styles from "./Login.module.css";
import { RxCross2 } from "react-icons/rx";
import { useState, useContext } from "react";
import axios, { AxiosResponse } from "axios";
import { AuthContext } from "../../context/AuthContext";

const initialLoginState = {
  email: "",
  password: "",
};

export const Login = ({ handleShowLogin, handleShowSignup }: userProps) => {
  const [userDetails, setuserDetails] =
    useState<Omit<SignupInterface, "username">>(initialLoginState);

  const { setAuth } = useContext(AuthContext);
  const handleCreateAccount = (): void => {
    handleShowLogin();
    handleShowSignup();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setuserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl: string = "http://localhost:8080/users/login";
    try {
      const response: AxiosResponse<SignupResponseInterface> = await axios.post(
        apiUrl,
        userDetails
      );

      if (response.status >= 200 && response.status < 300) {
        alert(response.data.message);
        localStorage.setItem(
          "users",
          JSON.stringify({
            user: response.data.user.email.toString(),
            token: response.data.token,
            Auth: true,
          })
        );

        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        setAuth(true);
        setuserDetails(initialLoginState);
        handleShowLogin();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <div className={styles.suContainer}>
          <div>
            <h2>Login</h2>
            <button onClick={handleShowLogin}>
              {" "}
              <RxCross2 />
            </button>
          </div>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
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
            New to Foodie?{" "}
            <span onClick={handleCreateAccount}>Create account</span>
          </p>
        </div>
      </div>
    </div>
  );
};
