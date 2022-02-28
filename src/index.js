import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.baind(store)} updateNewPostText={store.updateNewPostText.baind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// ServiceWorker.unregister();

reportWebVitals();
