import './App.css';
import { Routes, Route } from "react-router-dom";
import FlashCard from './components/flashcard/FlashCard';
import Navbar from './components/navbar/Navbar';
import CourseMainHomepage from './components/course-page/CourseHomepage';
import ChoosePathPage from './components/learn-pages/ChoosePathPage';
import LessonPage from './components/learn-pages/LessonPage';
import LoginForm from './components/login/LoginForm';
import CourseHomepage from './components/course-page/CourseHomepage';
import MainHomepage from './components/landing-page/MainHomepage';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route index   path="/" element={<CourseHomepage />}/>
        <Route path='/login' element={<LoginForm />} />
      </Routes> */}
      <MainHomepage />
    </div>
  );
}

export default App;
