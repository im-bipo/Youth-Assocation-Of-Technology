import React from "react";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./component/page/AboutUs";
import Contact from "./component/page/Contact";
import Project from "./component/page/Project";
import RootNav from "./Layouts/RootNav";
import Event from "./component/page/Event";
function App() {
 const bipo =  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootNav/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="events" element={<Event/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects" element={<Project/>}/>
      </Route>

    )
  )
  return (
    <div className="App bg-[#081338] text-white">
      <RouterProvider router={bipo}/>
    </div>
  );
}

export default App;
