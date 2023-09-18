import { GetSaveRecipe } from "../../types/recipes.interface";
import styles from "../../pages/recipes/Recipes.module.css";
import { Link } from "react-router-dom";

interface saveRecipeListProp {
  save: Array<GetSaveRecipe>;
}

export const SaveRecipesList = ({ save }: saveRecipeListProp) => {
  return (
    <>
      {save.length > 0 && (
        <div className={styles.recpie_container}>
          {save.map((res) => (
            <div className={styles.recipe_item} key={res.id}>
              <div>
                <img src={res.image} alt="" />
              </div>

              <div className={styles.RecipesLink}>
                <Link to={`/single/${res._id}`}>{res.title}</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
