import Allroutes from "./All Routers/Allroutes";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Authcontextprovider } from "./Context/Authcontext";

function App() {
  return (
    <div>
      <Authcontextprovider>
        <Navbar />
        <Allroutes />
      </Authcontextprovider>
    </div>
  );
}

export default App;
