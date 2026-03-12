import Dashboard from "./Components/Dashboard"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"


function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="main">
        <Dashboard></Dashboard>
      </div>
    </div>
  )
}

export default App
  