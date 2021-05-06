import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/';
import Product from './pages/Product'
import Footer from './components/Footer/';
import HomePage from './pages/Home';
import { Box, ThemeProvider } from '@material-ui/core';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import ShippingPage from './pages/Shipping';
import { myTheme } from './theme';
import PaymentPage from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import UserList from './pages/UserList';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';
import OrderList from './pages/OrderList';



const App = () => {


  return (
    <Router>
      <div className="App">
      
      
      <ThemeProvider theme={myTheme}>
      <Box component={'div'} >
        <Header />
          <main>
              <Route path='/' exact component={HomePage} />
              <Route path='/page/:page' exact component={HomePage} />
              <Route path='/product/:id' exact component={Product} />
              <Route path='/cart/:id?' component={CartPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <Route path='/profile' component={ProfilePage} />
              <Route path='/shipping' component={ShippingPage} />
              <Route path='/payment' component={PaymentPage} />
              <Route path='/placeorder' component={PlaceOrder} />
              <Route path='/order/:id' component={Order} />
              <Route path='/admin/userlist' component={UserList} />
              <Route path='/admin/productlist' component={ProductList} />
              <Route path='/admin/product/:id/edit' component={ProductEdit} />
              <Route path='/admin/orderlist' component={OrderList} />
          </main>
        <Footer />
        </Box>
        </ThemeProvider>
     
        
      </div>
    </Router>
    
  );
}

export default App;
