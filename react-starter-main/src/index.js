import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { NotFound } from "./pages/NotFound";
import { SimpleFormPage } from "./pages/SimpleFormPage";
import { ExampleFormPage } from "./pages/ExampleFormPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/example-form" element={<ExampleFormPage />} />
        <Route path="/simple-form" element={<SimpleFormPage />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
