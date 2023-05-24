import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Store } from "redux";
import { Provider } from "react-redux";
import store from "./redux/store";

// createRoot(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,

//   document.getElementById('root')
// )

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
