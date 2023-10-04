import { useState } from "react";
import SearchPage from "./components/SearchPage/SearchPage";
import init from "./init";
import "./App.css";

function App() {
  return <SearchPage {...init} />;
}

export default App;
