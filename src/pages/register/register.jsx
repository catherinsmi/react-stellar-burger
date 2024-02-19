import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './register.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../services/slices/user-slice';

export default function Register() {
  const [valueMail, setValueMail] = useState('');
  const [valueName, setValueName] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault();
    fetch('https://norma.nomoreparties.space/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: valueMail,
        password: valuePassword,
        name: valueName,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('refreshToken', result.refreshToken);
        dispatch(setUser(result.user));
      });
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Регистрация</h1>
      <form onSubmit={(e) => handleSubmitRegisterForm(e)} className={styles.form}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setValueName(e.target.value)}
          value={valueName}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setValueMail(e.target.value)}
          value={valueMail}
          name={'mail'}
          error={false}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <PasswordInput
          onChange={(e) => setValuePassword(e.target.value)}
          placeholder={'Пароль'}
          value={valuePassword}
          name={'password'}
          extraClass="mb-2"
        />
        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>
      <p className={styles.paragraph}>
        Уже зарегистрированы?{' '}
        <Link to="/login" style={{ textDecoration: 'none', color: '#4C4CFF' }}>
          Войти
        </Link>
      </p>
    </div>
  );
}
