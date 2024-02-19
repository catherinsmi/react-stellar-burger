import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './reset-password.module.css';
import { Link } from 'react-router-dom';
import { checkResponse } from '../../utils/check-response';

export default function ResetPassword() {
  const [valueKey, setValueKey] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: valuePassword,
        token: valueKey,
      }),
    })
      .then((response) => checkResponse(response))
      .then((data) => console.log(data));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Восстановление пароля</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.form}>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
          name={'password'}
          extraClass="mb-2"
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={(e) => setValueKey(e.target.value)}
          value={valueKey}
          name={'key'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </form>
      <p className={styles.paragraph}>
        Вспомнили пароль? <Link style={{ textDecoration: 'none', color: '#4C4CFF' }}>Войти</Link>
      </p>
    </div>
  );
}
