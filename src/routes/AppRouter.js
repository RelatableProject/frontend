import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ConfigurationPage from "../components/configuration/ConfigurationPage";
import Navbar from "../components/navbar/Navbar";
import PageOverlay from "../components/PageOverlay";
import ProjectsPage from "../components/projects/ProjectsPage";
import UsersPage from "../components/users/UsersPage";

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                    <Routes>
                        <Route path="/users" element={<PageOverlay title={"Usuarios"}><UsersPage/></PageOverlay>}/>
                        <Route path="/config" element={<PageOverlay title={"Configuracion de Relatable"}><ConfigurationPage/></PageOverlay>}/>
                        <Route path="/projects" element={<PageOverlay title={"Proyectos"}><ProjectsPage/></PageOverlay>}/>
                    </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;
