import { ToastContainer } from "react-toastify";
import ToAuthenticate from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1500} />
      <ToAuthenticate />
    </div>
  );
}

export default App;
