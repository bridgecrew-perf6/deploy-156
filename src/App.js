import './App.css';
import Slider from "./component/Slider";
import Products from "./component/Products"
import Questions from "./component/Questions"
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
   <>
 <Navbar/>
<Home />
<Switch>
        <Route exact path="/" component={Slider}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/productlist" component={ProductList} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
 </Switch>
  <Footer/> 

   </>
  );
}

export default App;
