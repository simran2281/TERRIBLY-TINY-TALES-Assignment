import React from "react";
import Header from './Components/Header';
import Profile from './Components/Profile';
import PostItem from "./Components/PostItem";
import "./App.css";
import "./Styles/Header.css";
import "./Styles/Profile.css";
import "./Styles/PostItem.css";


const App = () => {
  return (
    <div>
    <Header />
    <Profile />
    <PostItem/>
  </div>
  );
}
export default App;
