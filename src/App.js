/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <Router>
      <div id="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="dialogs" element={<Dialogs store={props.store} />} />
            <Route
              path="profile"
              element={
                <Main
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
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
