import React from 'react'
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sidenav, Dropdown, Navbar, Ripple, initMDB } from "mdb-ui-kit";

export default function Header() {

    useEffect(() => {
        // Initialization for ES Users

        initMDB({ Sidenav, Dropdown, Navbar, Ripple, });

        const sidenav = document.getElementById("sidenav-1");
        const sidenavInstance = Sidenav.getInstance(sidenav);

        let innerWidth = null;

        const setMode = () => {
            // Check necessary for Android devices
            if (window.innerWidth === innerWidth) {
                return;
            }

            innerWidth = window.innerWidth;

            if (window.innerWidth < 1400) {
                sidenavInstance.changeMode("over");
                sidenavInstance.hide();
            } else {
                sidenavInstance.changeMode("side");
                sidenavInstance.show();
            }
        };

        setMode();

        // Event listeners
        window.addEventListener("resize", setMode);

        return () => {
            sidenavInstance.hide();
            window.removeEventListener("resize", setMode);
        };
    }, []);


    return (
        <header>
            <nav
                data-mdb-sidenav-init
                id="sidenav-1"
                className="sidenav"
                data-mdb-hidden="true"
                data-mdb-accordion="true"
            >
                <NavLink

                    className="d-flex justify-content-center py-4"
                    to="/"
                >
                    <img
                        id="MDB-logo"
                        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.webp"
                        alt="MDB Logo"
                        draggable="false"
                    />
                </NavLink>

                <ul className="sidenav-menu">
                    <li className="sidenav-item">
                        <NavLink className="sidenav-link" to="/about" >
                            <i className="fas fa-chart-area fa-fw me-3"></i>
                            <span>Webiste traffic</span>
                        </NavLink>
                    </li>
                    <li className="sidenav-item">
                        <NavLink className="sidenav-link" to="" >
                            <i className="fas fa-cogs fa-fw me-3"></i>
                            <span>Settings</span>
                        </NavLink>
                        <ul className="sidenav-collapse">
                            <li className="sidenav-item">
                                <NavLink className="sidenav-link" to="" >
                                    Profile
                                </NavLink>
                            </li>
                            <li className="sidenav-item">
                                <NavLink className="sidenav-link" to="" >
                                    Account
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="sidenav-item">
                        <NavLink className="sidenav-link" to="" >
                            <i className="fas fa-lock fa-fw me-3"></i>
                            <span>Password</span>
                        </NavLink>
                        <ul className="sidenav-collapse">
                            <li className="sidenav-item">
                                <NavLink className="sidenav-link" to="" >
                                    Request password
                                </NavLink>
                            </li>
                            <li className="sidenav-item">
                                <NavLink className="sidenav-link" to="" >
                                    Reset password
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <nav
                data-mdb-navbar-init
                id="main-navbar"
                className="navbar navbar-expand-lg bg-body fixed-top"
            >
                <div className="container-fluid">
                    <button
                        data-mdb-ripple-init
                        data-mdb-toggle="sidenav"
                        data-mdb-target="#sidenav-1"
                        className="btn shadow-0 p-0 me-3 d-block d-xxl-none"
                        aria-controls="#sidenav-1"
                        aria-haspopup="true"
                    >
                        <i className="fas fa-bars fa-lg"></i>
                    </button>

                    <form className="d-none d-md-flex input-group w-auto my-auto">
                        <input
                            autoComplete="off"
                            type="search"
                            className="form-control rounded"
                            placeholder="Search (ctrl + '/' to focus)"
                            style={{ minWidth: "225px" }}
                        />
                        <span className="input-group-text border-0">
                            <i className="fas fa-search"></i>
                        </span>
                    </form>

                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item dropdown">
                            <NavLink
                                data-mdb-dropdown-init
                                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                to="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                aria-expanded="false"

                            >
                                <i className="fas fa-bell"></i>
                                <span className="badge rounded-pill badge-notification bg-danger">
                                    1
                                </span>
                            </NavLink>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        Some news
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        Another news
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        Something else here
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link me-3 me-lg-0" to="#" >
                                <i className="fas fa-fill-drip"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <NavLink className="nav-link" to="#" >
                                <i className="fab fa-github"></i>
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink
                                data-mdb-dropdown-init
                                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                aria-expanded="false"

                            >
                                <i className="flag-united-kingdom flag m-0"></i>
                            </NavLink>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-united-kingdom flag"></i>
                                        English
                                        <i className="fa fa-check text-success ms-2"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-poland flag"></i>
                                        Polski
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-china flag"></i>
                                        中文
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-japan flag"></i>
                                        日本語
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-germany flag"></i>
                                        Deutsch
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-france flag"></i>
                                        Français
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-spain flag"></i>
                                        Español
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-russia flag"></i>
                                        Русский
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        <i className="flag-portugal flag"></i>
                                        Português
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink
                                data-mdb-dropdown-init
                                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                to="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                aria-expanded="false"

                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                    className="rounded-circle"
                                    height="22"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </NavLink>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        My profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        Settings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#" >
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
