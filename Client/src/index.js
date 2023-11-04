// import React from "react";
// import ReactDOM from "react-dom";
// import { createRoot } from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// // import { Store } from "redux";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// // createRoot(
// //     <BrowserRouter>
// //       <App />
// //     </BrowserRouter>,

// //   document.getElementById('root')
// // )

// ReactDOM.render(

//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,

//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
