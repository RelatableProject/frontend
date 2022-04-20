import React from 'react';
import './style.css';
import team_2 from '../../assets/navbar/img/team-2.jpg'
import logo_spotify from '../../assets/navbar/img/small-logos/logo-spotify.svg'
import {NavLink, useLocation} from "react-router-dom";


const Navbar = () => {
    const {pathname} = useLocation();
    return (
        <nav className="navbar navbar-light navbar-expand-md navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none" id="navbarBlur" navbar-scroll="true">
            <div className="container-fluid">
                <div className="container-fluid py-2 px-0">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a href="#"><span className="opacity-5 text-dark" /></a><a className="opacity-5 text-dark" >Inicio</a></li>
                        {
                            pathname.split("/").map(x => x.replace(" ", "")).filter(x => x !== "").map(x => {
                                return <li key={x} className="breadcrumb-item active"><span className="text-sm text-dark active">{x}</span></li>
                            })
                        }

                    </ol>
                    <NavLink to={'/'} className="font-weight-bolder mb-0" style={{marginRight: "15px"}}>
                        Inicio
                    </NavLink>
                    <NavLink to={'/users'} className="font-weight-bolder mb-0" style={{marginRight: "15px"}} >
                        Usuarios
                    </NavLink>
                    <NavLink to={'/projects'} className="font-weight-bolder mb-0" style={{marginRight: "15px"}} >
                        Proyectos
                    </NavLink>
                    <NavLink to={'/config'} className="font-weight-bolder mb-0" style={{marginRight: "15px"}}>
                        Configuración
                    </NavLink>

{/*
                    <h6 className="font-weight-bolder mb-0">Dashboard</h6>
*/}

                </div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbar"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 w-100 justify-content-end" id="navbar">
                    {/*<div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group"><span className="input-group-text text-body p-0 m-0"><a className="fas fa-search p-2" aria-hidden="true" /><input className="form-control-sm form-control mr-2" type="text" placeholder="Type here..." style={{border: 'none'}} /></span></div>
                    </div>*/}
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item d-flex align-items-center"><a className="nav-link text-body font-weight-bold px-0" href=""><i className="fa fa-user me-sm-1" /><span className="d-sm-inline d-none">Sign In</span></a></li>
                        <li className="nav-item px-3 d-flex align-items-center"><a className="nav-link text-body p-0" href=""><i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" /></a></li>
                        <li className="nav-item dropdown pe-2 d-flex align-items-center">
                            <div>
                                <div className="dropdown nav-item pe-2 d-flex align-items-center"><a aria-expanded="false" data-bs-toggle="dropdown" id="dropdownMenuButton" className="nav-link text-body p-0" href=""><i className="fa fa-bell" /></a>
                                    <div className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4">
                                        <div className="mb-2"><a className="dropdown-item border-radius-md" href="">
                                            <div className="d-flex py-1">
                                                <div className="my-auto"><img className="avatar avatar-sm me-3" src={team_2} /></div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="text-sm font-weight-normal mb-1"><span className="font-weight-bold">New&nbsp;message<br /></span>from Laur</h6>
                                                    <p className="text-xs text-secondary mb-0"><i className="fa fa-clock-o" />&nbsp;13 minutes ago</p>
                                                </div>
                                            </div>
                                        </a></div>
                                        <div className="mb-2"><a className="dropdown-item border-radius-md" href="">
                                            <div className="d-flex py-1">
                                                <div className="my-auto"><img className="avatar avatar-sm me-3" src={logo_spotify} /></div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="text-sm font-weight-normal mb-1"><span className="font-weight-bold">New&nbsp;album<br /></span>by Travis Scott</h6>
                                                    <p className="text-xs text-secondary mb-0"><i className="fa fa-clock-o" />&nbsp;1 day</p>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
