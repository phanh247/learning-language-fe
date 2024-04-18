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
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" index element={<LoginForm />}/>
        <Route path="/level" element={<ChoosePathPage/>}/>
        <Route path="/learn" element={<LearnPage/>}/>
        <Route path="/course" element={<CourseHomepage/>}/>
        <Route path="/" element={<MainHomepage/>}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
