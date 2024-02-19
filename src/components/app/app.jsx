import styles from './app.module.css';
import AppHeader from './app-header/app-header.jsx';
import Modal from './modal/modal.jsx';
import OrderDetails from './order-details/order-details.jsx';
import OrderLoader from './order-details/order-loader/order-loader.jsx';
import IngredientDetails from './ingredient-details/ingredient-details.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../../pages/home/home';
import Login from '../../pages/login/login';
import { setModalOrderActive, setModalIngredientActive } from '../../services/slices/modal-slice';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Register from '../../pages/register/register';
import Profile from '../../pages/profile/profile';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import ProfileHome from '../../pages/profile/profile-home/profile-home';
import { useState, useEffect } from 'react';
import OrderFeed from '../../pages/profile/order-feed/order-feed';
import Orders from './orders/orders';
import { OnlyAuth, OnlyUnAuth } from './protected-route/protected-route';

// function ProtecdedRoute({ checked, user, isAnon, children }) {
//   if (!checked) {
//     return <p>Loading</p>;
//   }

//   if (isAnon && user) {
//     return <Navigate to="/profile" />;
//   }
//   if (!isAnon && !user) {
//     return <Navigate to="/login" />;
//   }

//   return <>{children}</>;
// }

function App() {
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const fetchedOrderNumber = useSelector((state) => state.order.fetchedOrderNumber);
  const { isModalIngredientActive, isModalOrderActive } = useSelector((state) => state.modal);
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    dispatch(setModalIngredientActive(false));
    navigate(-1);
  };

  useEffect(() => {
    setChecked(true);
    //setUser({});
  }, []);

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/order-feed" element={<OrderFeed />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<ProfileHome />} />
            <Route path="/profile/orders" element={<Orders />} />
          </Route>
          <Route path="/ingredients/:ingredientId" element={<IngredientDetails />} />
        </Routes>
      </div>
      <Modal
        isModalActive={isModalOrderActive}
        onClose={() => dispatch(setModalOrderActive(false))}>
        {fetchedOrderNumber ? (
          <OrderDetails fetchedOrderNumber={fetchedOrderNumber} />
        ) : (
          <OrderLoader />
        )}
      </Modal>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal isModalActive={isModalIngredientActive} onClose={() => handleModalClose()}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
