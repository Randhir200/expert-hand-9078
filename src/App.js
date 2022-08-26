import './App.css';
import AllRoutes from './components/AllRoutes';
import Timemanagement from './pages/Features/Timemanagement';
import Navbar from './pages/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div> 
  );
}
export default App;
