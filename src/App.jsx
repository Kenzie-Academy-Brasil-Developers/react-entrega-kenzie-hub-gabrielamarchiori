import { ToastContainer } from "react-toastify"
import ToAuthenticate from "./routes"
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/dashboard";

function App() {
  

  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <ToAuthenticate/>
      
    </div>
  )
}

export default App
