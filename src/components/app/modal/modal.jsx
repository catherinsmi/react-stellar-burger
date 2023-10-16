import PropTypes from 'prop-types';
import styles from './modal.module.css'
import Close from './close/close.jsx'
import ModalOverlay from './modal-overlay/modal-overlay';
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'

export default function Modal({isModalActive, onClose, children}) {

  const modalRoot = document.getElementById("react-modal")

  useEffect(() => {
      function handleEscKey(event){
          if(event.key === 'Escape') {
              onClose()
          }
      }

      window.addEventListener('keydown', handleEscKey)
      return () => {
          window.removeEventListener('keydown', handleEscKey);
        }
  }, [])

  if (!isModalActive) return null
  return ReactDOM.createPortal(
      <>
        <div className={styles.modal}>    
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <Close onClose={onClose} />
            {children}
          </div>
        </div>
        <ModalOverlay onClose={onClose}/>
      </> ,
      modalRoot
  )
}



Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
  isModalActive: PropTypes.bool,
};
