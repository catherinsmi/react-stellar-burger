import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './tabs.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTab } from '../../../../services/slices/ingredients-slice'

function Tabs() {
    const dispatch = useDispatch()
    const currentTab = useSelector(state => state.ingredients.currentTab)
    const scrollTab = (tab) => {
      dispatch(setTab(tab))
      const element = document.getElementById(tab);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    return (
      <div className={styles.tabs}>
        <Tab  value="buns" active={currentTab === 'buns'} onClick={scrollTab}>
          Булки
        </Tab>
        <Tab  value="sauces" active={currentTab === 'sauces'} onClick={scrollTab}>
          Соусы
        </Tab>
        <Tab  value="fillings" active={currentTab === 'fillings'} onClick={scrollTab}>
          Начинки
        </Tab>
      </div>
    )
}

export default Tabs