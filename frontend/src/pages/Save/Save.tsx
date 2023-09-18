import { useContext, useEffect } from "react";
import { saveRecipesIterface } from "../../types/recipes.interface";
import { SignupResponseInterface } from "../../types/user.types";
import styles from "./Save.module.css";
import axios, { AxiosResponse } from "axios";
import { SaveContext } from "../../context/SaveContext";
import { SaveRecipesList } from "../../components/SaveRecipesList/SaveRecipesList";

export const Save = () => {
  const { save, setSave } = useContext(SaveContext);
  const getSaveRecipes = async () => {
    const url = "https://webledger-assigment.onrender.com/recipes";
    const token: string = localStorage.getItem("users") || "";
    const users: SignupResponseInterface = token
      ? JSON.parse(token)
      : { message: "", users: {}, token: "" };
    const options = {
      headers: {
        Authorization: users.token || "",
      },
    };
    try {
      const response: AxiosResponse<saveRecipesIterface> = await axios.get(
        url,
        options
      );

      if (response.status >= 200 && response.status < 300) {
        setSave(response.data.save);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSaveRecipes();

    return () => {
      setSave([]);
    };
  }, []);
  return (
    <div className={styles.save}>
      <div className={styles.save_container}>
        <SaveRecipesList save={save} />
      </div>
    </div>
  );
};
