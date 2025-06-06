import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import AdminPage from "./pages/adminPage"
import LoginPage from "./pages/loginPage"
import TestingPage from "./pages/testingPage"
import { Toaster } from "react-hot-toast"

function App() {
    return (
     <BrowserRouter>
     <Toaster position="top-right"/>
         <Routes path="/*">
              <Route path="/admin/*" element={<AdminPage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/*" element={<TestingPage/>}/>
              <Route path="/" element={<h1>Home</h1>}/>
              <Route path="*" element={<h1>404 Not Found</h1>}/>
              

         </Routes>
      </BrowserRouter>
    )
}

export default App
