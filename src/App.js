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
import Event from "./component/page/Event";
import Resources from "./component/page/Resources";
import Teams, { TeamLoader } from "./component/page/teams/Teams";

//layouts
import RootNav from "./Layouts/RootNav";
import Error404 from "./component/page/Error404";
import TeamsDetails, { TeamsDetailsLoader } from "./component/page/teams/TeamsDetails";
import TeamLayout from "./Layouts/TeamLayout";

function App() {
  const bipo = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootNav />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Event />} />
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
      <RouterProvider router={bipo} />
    </div>
  );
}

export default App;
