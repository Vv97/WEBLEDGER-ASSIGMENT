import { Recipes } from "../recipes/Recipes";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <Recipes />
    </div>
  );
};

export default Home;
