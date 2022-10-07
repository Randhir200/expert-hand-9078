import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './pages/Footer/Footer';
import Example from './pages/Navbar/FinalNavbar';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Example />
      <AllRoutes />
      <Footer/> 
    </div>
  );
}
export default App;
