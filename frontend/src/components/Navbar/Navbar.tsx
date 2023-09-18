import React from "react";
import styles from "./navbar.module.css";
import { useState, useEffect, useContext } from "react";
import { Login } from "../../pages/Login/Loign";
import { Signup } from "../../pages/Signup/Signup";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
import { recipeContext } from "../../context/RecipeContext";
import { AuthContext } from "../../context/AuthContext";
import { ShowLoginContext } from "../../context/ShowLogin";

export const Navbar = () => {
  const [showSignup, setShowSignup] = useState<boolean>(false);
  const { showLogin, setShowLogin } = useContext(ShowLoginContext);
  const [text, setText] = useState<string>("");
  const serachQuery = useDebounce(text, 1000);
  const { setRecipe } = useContext(recipeContext);
  const { Auth, setAuth } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleShowSignup = (): void => {
    setShowSignup((prev) => !prev);
  };

  const handleShowLogin = (): void => {
    setShowLogin(!showLogin);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setAuth(false);
  };

  const fetchRecipe = (query: string): void => {
    axios
      .get(
        `https://webledger-assigment.onrender.com/recipes/search?query=${query}`
      )
      .then((res) => {
        setRecipe(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (serachQuery) {
      fetchRecipe(serachQuery);
    } else if (serachQuery.length === 0) {
      setRecipe([]);
    }

    return () => {
      setRecipe([]);
    };
  }, [serachQuery]);

  return (
    <header className={styles.navbar}>
      <nav>
        <div>
          <Link to="/">Foodie</Link>
          <input
            type="text"
            placeholder="Search Recipes"
            value={text}
            onChange={handleChange}
          />
        </div>
        <ul className={styles.navLists}>
          <li>
            <Link to="/save">Save</Link>
          </li>
          {!Auth && (
            <>
              <li>
                <button onClick={handleShowSignup}>Signup</button>
              </li>
              <li>
                <button onClick={handleShowLogin}>Login</button>
              </li>
            </>
          )}
          {showSignup && (
            <Signup
              handleShowSignup={handleShowSignup}
              handleShowLogin={handleShowLogin}
            />
          )}
          {showLogin && (
            <Login
              handleShowLogin={handleShowLogin}
              handleShowSignup={handleShowSignup}
            />
          )}

          {Auth && (
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
