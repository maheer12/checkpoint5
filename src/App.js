import React from "react";
import "./App.css";
import ProfilePhoto from "./component/profil/ProfilePhoto.js";
import FullName from "./component/profil/FullName.js";
import Address from "./component/profil/Adress.js";

const App = () => {
  return (
    <>
      <FullName />
      <ProfilePhoto />
      <Address />
    </>
  );
};

export default App;
