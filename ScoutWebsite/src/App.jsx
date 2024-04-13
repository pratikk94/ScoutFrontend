
import './App.css'
import Home from './Pages/Home/Home';
import Sidebar from './components/Navigation/Sidebar';

function App() {
  return (
    <div className="parent">
      <Sidebar />
      <div className="content">
        {/* The rest of your content goes here */}
        <Home/>
      </div>
    </div>
  );
}

export default App
