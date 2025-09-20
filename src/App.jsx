import Sidebar from "./Layout/SideBar"
import Topbar from "./Layout/Topbar"
import Office from "./pages/Office"

function App() {


  return (
    <div className="flex bg-bg pb-6">
     <Sidebar/>
     <div className="w-[calc(100%-220px)] ml-[220px]">
    <Topbar/>
     <Office/>
     </div>
     
    </div>
  )
}

export default App
