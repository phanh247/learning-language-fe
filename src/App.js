import './App.css';
import { Routes, Route } from "react-router-dom";
import ChoosePathPage from './components/learn-pages/ChoosePathPage';
import LoginForm from './components/login/LoginForm';
import CourseHomepage from './components/course-page/CourseHomepage';
import LearnPage from './components/learn-pages/LearnPage';
import MainHomepage from './components/landing-page/MainHomepage';
import Register from './components/register/Register';
import CourseDetailsPage from './components/course-details-page/CourseDetailsPage';
import CourseLearnPage from './components/course-learn-page/CourseLearnPage';

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
        <Route path='/course-details' element={<CourseDetailsPage />} />
        <Route path='/course-learn' element={<CourseLearnPage />} />
      </Routes>
    </div>
  );
}

export default App;
