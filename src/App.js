/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <Router>
      <div id="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="dialogs" element={<DialogsContainer />} />
            <Route path="profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<Profile />} />
            </Route>
            <Route path="users" element={<UsersContainer />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
