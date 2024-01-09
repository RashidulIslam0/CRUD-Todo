import React, { useEffect, useState } from "react";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import "./edit.css";
const Edit = () => {
  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });
  // console.log(inputdata);

  const [status, setStatus] = useState("Active");
  const [image, setImages] = useState("");
  const [preview, setPreview] = useState("");

  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  //setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData((inputdata) => ({
      ...inputdata,
      [name]: value,
    }));
  };

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // profile
  const setProfile = (e) => {
    setImages(e.target.files[0]);
  };

  // console.log(setInputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", inputdata);

    const { fname, lname, email, mobile, gender, location } = inputdata;

    if (fname === "") {
      toast.error("First name is Required !");
    } else if (lname === "") {
      toast.error("Last name is Required !");
    } else if (email === "") {
      toast.error("Email is Required !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else if (mobile === "") {
      toast.error("Mobile is Required !");
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile!f");
    } else if (gender === "") {
      toast.error("Gender is Required !");
    } else if (status === "") {
      toast.error("Status is Required !");
    } else if (image === "") {
      toast.error("Prfile is Required !");
    } else if (location === "") {
      toast.error("location is Required !");
    } else {
      toast.success("Register SuccessFully !");
    }
  };
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);
  return (
    <div className="container">
      <h2 className=" text-center mt-1">Update Your Details</h2>
      <div className="card shadow mt-3 p-3">
        <div className="profile_div text-center">
          <img src={preview ? preview : "/man.png"} alt="Img" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row mb-6">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  onChange={setInputValue}
                  value={inputdata.fname}
                  placeholder="Enter FirstName"
                />
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  onChange={setInputValue}
                  value={inputdata.lname}
                  placeholder="Enter LastName"
                />
              </div>
            </div>
          </div>

          <div className="row mb-6 mt-1">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={setInputValue}
                  value={inputdata.email}
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  onChange={setInputValue}
                  value={inputdata.mobile}
                  placeholder="Enter Mobile"
                />
              </div>
            </div>
          </div>

          <div className="row mb-6 mt-1">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">Select Your Gender</label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      onChange={setInputValue}
                      // value={inputdata.gender}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      onChange={setInputValue}
                      // value={inputdata.gender}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">Select Your Status</label>
                <Select
                  options={options}
                  onChange={setStatusValue}
                  // value={status}
                />
              </div>
            </div>
          </div>

          <div className="row mb-6 mt-1">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">Select Your Profile</label>
                <input
                  type="file"
                  className="form-control"
                  name="location"
                  onChange={setProfile}
                  // value={inputdata.}
                  placeholder="Select Your Profile"
                />
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label">Enter Your Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  onChange={setInputValue}
                  value={inputdata.location}
                  placeholder="Enter Your Location"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block w-100 mt-3"
          >
            Sign in
          </button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Edit;
