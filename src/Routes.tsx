import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/acceuil";
import Find from "pages/find";
import Browse from "pages/browse";
import About from "pages/about";
import Profil from "pages/profil";
import Result from "pages/resultats";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "find", element: <Find /> },
    { path: "browse", element: <Browse /> },
    { path: "about", element: <About /> },
    { path: "profil", element: <Profil /> },
    { path: "resultats", element: <Result /> },
  ]);
  return element;
};

export default ProjectRoutes;
