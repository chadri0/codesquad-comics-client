import Header from "./shared/Header";
import Footer from "./shared/Footer";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Update from "./components/Update";


function App() {
  return (
    <div className="App">
      
      <Header />
      {/* <About /> */}
      <Admin />
      {/* <Create /> */}
      <Home />
      {/* <Login /> */}
      {/* <Update /> */}
      <Footer />
    </div>
  );
}

export default App;
