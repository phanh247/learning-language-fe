import './App.css';
import { Routes, Route } from "react-router-dom";
import FlashCard from './components/flashcard/FlashCard';
import Navbar from './components/navbar/Navbar';
import CourseMainHomepage from './components/course-page/CourseHomepage';
import ChoosePathPage from './components/learn-pages/ChoosePathPage';
import LoginForm from './components/login/LoginForm';
import CourseHomepage from './components/course-page/CourseHomepage';
import LearnPage from './components/learn-pages/LearnPage';
import MainHomepage from './components/landing-page/MainHomepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" index element={<LoginForm />}/>
        <Route path="/level" element={<ChoosePathPage/>}/>
        <Route path="/learn" element={<LearnPage/>}/>
        <Route path="/" element={<MainHomepage/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
