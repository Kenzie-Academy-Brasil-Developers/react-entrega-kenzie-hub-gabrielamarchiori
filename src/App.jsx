import { ToastContainer } from "react-toastify";
import ToAuthenticate from "./routes";
import "react-toastify/dist/ReactToastify.css";
import Contexts from "./contexts";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1500} />
      <ToAuthenticate />
    </div>
  );
}

export default App;
