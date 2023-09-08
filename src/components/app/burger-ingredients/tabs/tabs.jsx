import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import styles from './tabs.module.css'

function Tabs() {
    const [current, setCurrent] = useState('buns')
    const setTab = (tab) => {
      setCurrent(tab);
      const element = document.getElementById(tab);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    return (
      <div className={styles.tabs}>
        <Tab  value="buns" active={current === 'buns'} onClick={setTab}>
          Булки
        </Tab>
        <Tab  value="sauces" active={current === 'sauces'} onClick={setTab}>
          Соусы
        </Tab>
        <Tab  value="fillings" active={current === 'fillings'} onClick={setTab}>
          Начинки
        </Tab>
      </div>
    )
}

export default Tabs