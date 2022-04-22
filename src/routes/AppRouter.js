import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ConfigurationPage from "../components/page/config/ConfigurationPage";
import Navbar from "../components/navbar/Navbar";
import PageOverlay from "../components/PageOverlay";
import UsersPage from "../components/page/users/UsersPage";
import ProjectsPage from "../components/page/projects/ProjectsPage";

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
