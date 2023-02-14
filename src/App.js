
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";

import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/users" element = {<UserList />}/>
          <Route path="/products" element = {<ProductList />}/>
          
        </Routes>
      </div>
    </>
  );
}

export default App;
