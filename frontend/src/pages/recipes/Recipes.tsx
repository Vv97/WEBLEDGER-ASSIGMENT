import { useContext } from "react";
import { recipeContext } from "../../context/RecipeContext";
import styles from "./Recipes.module.css";
import axios, { AxiosResponse } from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Results, SaverecipesInterFace } from "../../types/recipes.interface";
import { SignupResponseInterface } from "../../types/user.types";
import { ShowLoginContext } from "../../context/ShowLogin";

export const Recipes = () => {
  const { recipes } = useContext(recipeContext);
  const { setShowLogin } = useContext(ShowLoginContext);
  const { Auth } = useContext(AuthContext);

  const saveRecipes = async (data: Results) => {
    if (!Auth) {
      setShowLogin(true);
      return;
    }

    const token: string = localStorage.getItem("users") || "";
    const users: SignupResponseInterface = token
      ? JSON.parse(token)
      : { message: "", users: {}, token: "" };
    const url = "http://localhost:8080/recipes/save";

    const options = {
      headers: {
        Authorization: users.token || "",
      },
    };
    try {
      const response: AxiosResponse<SaverecipesInterFace> = await axios.post(
        url,
        data,
        options
      );
      if (response.status >= 200 && response.status < 300) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.recipes}>
      {recipes.length > 0 ? (
        <div className={styles.recpie_container}>
          {recipes.map((res) => (
            <div className={styles.recipe_item} key={res.id}>
              <div>
                <img src={res.image} alt="" />
              </div>

              <div>{res.title}</div>
              <div className={styles.saveRecipe}>
                <button onClick={() => saveRecipes(res)}>Save</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            margin: "10% 0",
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          Search Recipes
        </div>
      )}
    </div>
  );
};
