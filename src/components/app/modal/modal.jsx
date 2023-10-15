import PropTypes from 'prop-types';
import styles from './modal.module.css'
import Close from './close/close.jsx'

export default function Modal({onClose, children}) {
  return (
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Close onClose={onClose} />
        {children}
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};
