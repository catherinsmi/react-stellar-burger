import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './component.module.css'
import PropTypes from 'prop-types'

function Component({ingredient}) {
    return (
        <div className={styles.component}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
          />
        </div>
    )
}
Component.propTypes = {
  ingredient: PropTypes.object.isRequired

}
export default Component