import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './forgot-password.module.css';
import { Link, Navigate } from 'react-router-dom';
import { checkResponse } from '../../utils/check-response';

export default function ForgotPassword() {
  const [valueMail, setValueMail] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://norma.nomoreparties.space/api/password-reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: valueMail,
      }),
    })
      .then((response) => checkResponse(response))
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Восстановление пароля</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setValueMail(e.target.value)}
          value={valueMail}
          name="mail"
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <button type="submit" className={styles.button}>
          Восстановить
        </button>
      </form>
      <p className={styles.paragraph}>
        Вспомнили пароль?{' '}
        <Link to="/login" style={{ textDecoration: 'none', color: '#4C4CFF' }}>
          Войти
        </Link>
      </p>
    </div>
  );
}
