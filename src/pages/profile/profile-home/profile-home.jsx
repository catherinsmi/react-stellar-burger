import React from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef, useEffect } from 'react';
import styles from './profile-home.module.css';
import { Link } from 'react-router-dom';
import { fetchWithRefresh } from '../../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../services/slices/user-slice';

export default function ProfileHome() {
  const [valueLogin, setValueLogin] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [valueName, setValueName] = useState('');
  const user = useSelector((store) => store.user.user);

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    setValueName(null);
  };

  useEffect(() => {
    fetchWithRefresh('https://norma.nomoreparties.space/api/auth/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    }).then((data) => dispatch(setUser(data.user)));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://norma.nomoreparties.space/api/auth/user', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  if (!user) {
    return 'loading';
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={styles.content}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={(e) => setValueName(e.target.value)}
        value={user.name}
        name={'name'}
        error={false}
        ref={inputRef}
        icon={'EditIcon'}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1"
      />

      <Input
        type={'text'}
        placeholder={'Логин'}
        onChange={(e) => setValueLogin(e.target.value)}
        value={user.email}
        name={'login'}
        error={false}
        ref={inputRef}
        icon={'EditIcon'}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1"
      />
      <Input
        type={'text'}
        placeholder={'Пароль'}
        onChange={(e) => setValuePassword(e.target.value)}
        value={valuePassword}
        name={'mail'}
        error={false}
        ref={inputRef}
        icon={'EditIcon'}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1"
      />
    </form>
  );
}
