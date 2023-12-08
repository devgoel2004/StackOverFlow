import AllRoutes from "./AllRoutes";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { Toaster } from "react-hot-toast";
// import Routes from "./Routes";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [slideIn, setSlideIn] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);
  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };
  return (
    <div className="App">
      <Router>
        <Toaster />
        <Navbar handleSlideIn={handleSlideIn} setIsOpen={setIsOpen} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
