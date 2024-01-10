import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSort,
  faTrash,
  faPenToSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="container-xl">
      <div className="search_add mt-4 d-flex justify-content-between">
        <div className="search col-lg-4">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success " type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="add_btn">
          <button className=" btn btn-primary" variant="primary">
            <FontAwesomeIcon icon={faPlus} />
            &nbsp; Add User
          </button>
        </div>
      </div>

      <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
        <div className="export_csv">
          <button className="btn export_btn btn-primary mt-3" variant="primary">
            &nbsp; Export To Csv
          </button>
        </div>

        <div className="filter_gender">
          <div className="filter">
            <div data-mdb-input-init className="form-outline">
              <h3>Filter By Gender</h3>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gander"
                    value="All"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    All
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gander"
                    value="Male"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gander"
                    value="Female"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="filter_newold">
          <h3>Sort By Value</h3>
          <div className="dropdown">
            <FontAwesomeIcon icon={faSort} />

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="filter_Status">
          <div className="filter">
            <div data-mdb-input-init className="form-outline">
              <h3>Filter By Status</h3>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="ALL"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    All
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Active
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="InActive"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    InActive
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive ">
        <div className="card shadow table-wrapper">
          <table className="table table-striped table-hover  ">
            <thead className=" bg-dark">
              <tr className="bg-dark">
                <th>ID</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Profile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Michael Holz</td>
                <td>04/10/2013</td>
                <td>M</td>
                <td>
                  <span className="status text-success">•</span> Active
                </td>
                <td>
                  <div className="card-profile-stats image d-flex justify-content-center">
                    <img src="/man.png" alt="" />
                  </div>
                </td>

                <td style={{ whiteSpace: "nowrap" }}>
                  <button className="btn bg-success me-1 ">Edit</button>
                  <button className="btn  bg-primary me-1">View</button>
                  <button className="btn bg-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <ul className="pagination">
              <li className="page-item disabled">
                <a href="#">Previous</a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  3
                </a>
              </li>

              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
