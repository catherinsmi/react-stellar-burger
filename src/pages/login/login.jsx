import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../services/slices/user-slice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [valueMail, setValueMail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };
  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    dispatch(login({ email: valueMail, password: valuePassword }));
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Вход</h1>
      <form onSubmit={(e) => handleSubmitLoginForm(e)} className={styles.form}>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setValueMail(e.target.value)}
          value={valueMail}
          name={'mail'}
          error={false}
          ref={inputRef}
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
          Войти
        </button>
      </form>
      <p className={styles.paragraph}>
        Вы — новый пользователь?{' '}
        <Link to="/register" style={{ textDecoration: 'none', color: '#4C4CFF' }}>
          Зарегистрироваться
        </Link>
      </p>
      <p className={styles.paragraph}>
        Забыли пароль?{' '}
        <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#4C4CFF' }}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
}
