import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}
export default App;
