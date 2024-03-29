import React from "react";

const Headers = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg  navbar-light bg-body-tertiary">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height={16}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          {/* Toggle button */}
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-link px-3 me-2"
              >
                Login
              </button>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-primary me-3"
              >
                Sign up for free
              </button>
              <a
                data-mdb-ripple-init
                className="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div>
  );
};

export default Headers;
