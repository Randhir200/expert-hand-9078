import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Navbar/Navbar';
import Mapy from './pages/mapy/Mapy';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
      <Mapy />
    </div>
  );
}
export default App;
