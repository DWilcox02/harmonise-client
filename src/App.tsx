import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  )
}

export default App
