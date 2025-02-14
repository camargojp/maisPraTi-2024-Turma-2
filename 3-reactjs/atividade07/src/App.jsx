import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter'
import BackgroundColorChanger from './components/BackgroundColorChanger'
import TodoList from './components/ToDoList'
import Timer from './components/Timer'
import ListFilter from './components/ListFilter'
import RegistrationForm from './components/RegistrationForm'
import DataRequest from './components/DataRequest'
import ImageGallery from './components/ImageGallery'
import CountdownTimer from './components/CountdownTimer'
import Tabs from './components/Tabs'
import Home from './components/Home'

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/background-changer" element={<BackgroundColorChanger />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/list-filter" element={<ListFilter />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/post-list" element={<DataRequest />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/countdown-timer" element={<CountdownTimer />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
