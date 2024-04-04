import logo from './logo.svg';
import './App.css';
import FlashCard from './components/flashcard/FlashCard';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FlashCard></FlashCard>
    </div>
  );
}

export default App;
