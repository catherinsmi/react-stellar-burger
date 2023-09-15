import ReactDOM from 'react-dom'
import styles from './modal.module.css'
import Close from './close/close.jsx'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

function ModalOverlay({isModalActive, onClose, children}) {
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
            <div className={styles.modal} onClick={onClose} >
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <Close onClose={onClose} />
                    {children}
                </div>
            </div>
        </>, 
        modalRoot
    )
}

export default ModalOverlay

ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
    isModalActive: PropTypes.bool.isRequired
}