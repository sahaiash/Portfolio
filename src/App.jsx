import { BrowserRouter,Route,Routes } from "react-router-dom"
import {Home} from "./pages/home"
import NotFound from "./pages/NotFound";
import { ThemeToggle } from "./components/ThemeToggle";

function App(){
  return(
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App


