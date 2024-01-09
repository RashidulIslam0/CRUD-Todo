// import { useState } from "react";
// import "./App.css";
// import Headers from "./components/Headers/Headers.jsx";
// import Home from "./pages/Home.jsx";
// import Register from "./pages/Register.jsx";
// import Edit from "./pages/Edit.jsx";
// import Profile from "./pages/Profile.jsx";
// import { Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Headers />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/edit" element={<Edit />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>

//       <button className="btn">Hello World</button>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Headers from "./components/Headers/Headers.jsx";

import Home from "./pages/Home/Home.jsx";
import Register from "./pages/Register/Register.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Headers />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/userprofile/:id" element={<Profile />} />
        </Routes>
      </>
    </>
  );
}

export default App;
