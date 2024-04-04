import './App.css';
import FlashCard from './components/flashcard/FlashCard';
import Navbar from './components/navbar/Navbar';
import MainHomepage from './components/homepages/CourseHomepage';
import ChoosePathPage from './components/learn-pages/ChoosePathPage';
import LessonPage from './components/learn-pages/LessonPage';

function App() {
  return (
    <div className="App">
      <LessonPage />
    </div>
  );
}

export default App;
