import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./Home";
import Contact from "./component/page/Contact";
import Project from "./component/page/Project";
import Event, { EventLoader } from "./component/page/Events/Event";
import Resources from "./component/page/Resources";
import Teams, { TeamLoader } from "./component/page/teams/Teams";
import TeamsDetails, { TeamsDetailsLoader } from "./component/page/teams/TeamsDetails";
import Error404 from "./component/page/Error404";

//layouts
import RootNav from "./Layouts/RootNav";
import TeamLayout from "./Layouts/TeamLayout";
import EventLayout from "./Layouts/EventLayout";

function App() {
  const bmcCsit = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootNav />} basemame>
        <Route index element={<Home />} />
        <Route path="events" element={<EventLayout />} >
          <Route index 
          element={<Event/>}
          loader={EventLoader}
          />
        </Route>
        <Route path="resources" element={<Resources />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        <Route path="teams" element={<TeamLayout />}>
          <Route index
            element={<Teams />}
            loader={TeamLoader} />

          <Route
            path='member/:idNo/:name'
            element={<TeamsDetails />}
            loader={TeamsDetailsLoader}
          />

        </Route>
        <Route path='*' element={<Error404/>}/>
      </Route>
    )
  );
  return (
    <div className="App bg-slate-50">
      <RouterProvider router={bmcCsit} />
    </div>
  );
}

export default App;
