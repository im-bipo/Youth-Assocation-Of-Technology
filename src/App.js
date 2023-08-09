import React from "react";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";

//pages 
import Home from "./Home";
import Contact from "./component/page/Contact";
import Project from "./component/page/Project";
import Event from "./component/page/Event";
import Resources from "./component/page/Resources";

//layouts
import RootNav from "./Layouts/RootNav";


function App() {
 const bipo =  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootNav/>}>
        <Route index element={<Home/>}/>
        <Route path="events" element={<Event/>}/>
          <Route path="resources" element={<Resources/>}/>
        <Route path="projects" element={<Project/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>

    )
  )
  return (
    <div className="App bg-slate-50">
      <RouterProvider router={bipo}/>
    </div>
  );
}

export default App;
