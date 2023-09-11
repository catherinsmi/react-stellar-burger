import styles from "./app.module.css"
import { data } from "../../utils/data"
import AppHeader from './app-header/app-header.jsx'
import BurgerIngredients from './burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './burger-constructor/burger-constructor.jsx'

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles['two-columns']}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor ingredients={data} />
      </div>
    </div>
  );
}

export default App;
