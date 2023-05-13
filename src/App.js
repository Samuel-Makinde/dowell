import "./App.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "./container";
import Footer from "./container/Footer";
import Navbar from "./container/Header/Navbar";
import { AppProvider } from "./container/ContextProvider/DataContext";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
      <Container />
      <Footer />
      </AppProvider>
      
    </div>
  );
}

export default App;
