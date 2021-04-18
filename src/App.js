import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import BookNow from './components/Dashboard/BookNow/BookNow';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Dashboard/Orders/Orders';
import Review from './components/Dashboard/Review/Review';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';


export const OrderContext = createContext();
export const UserContext = createContext();
export const UserToken = createContext();

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [userToken, setuserToken] = useState([]);

  const setToken = () => {
    const loggedinToken = sessionStorage.getItem('token');
    if (loggedinToken) {
      const loggedinTokenInfo = jwt_decode(loggedinToken);
      setuserToken(loggedinTokenInfo);
    }

  }
  useEffect(() => {
    setToken()
  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <OrderContext.Provider value={[orderItems, setOrderItems]}>
          <UserToken.Provider value={[userToken, setuserToken]}>
            <Router>
              <Switch>
                <Route path='/' exact>
                  <Home />
                </Route>
                <PrivateRoute path='/dashboard' exact>
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path='/dashboard/addService' exact>
                  <AddService />
                </PrivateRoute>
                <PrivateRoute path='/dashboard/bookNow' exact>
                  <BookNow />
                </PrivateRoute>
                <PrivateRoute path='/dashboard/orders' >
                  <Orders />
                </PrivateRoute>
                <PrivateRoute path='/dashboard/reviews' >
                  <Review />
                </PrivateRoute>
                <PrivateRoute path='/dashboard/addAdmin' >
                  <AddAdmin />
                </PrivateRoute>
                <Route path='/login' exact>
                  <Login />
                </Route>
              </Switch>
            </Router>
          </UserToken.Provider>
        </OrderContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
