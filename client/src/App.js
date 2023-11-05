import AllRoutes from "./AllRoutes";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAllQuestions } from "./actions/question";
// import Routes from "./Routes";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
