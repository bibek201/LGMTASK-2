import React, { useContext, useState } from "react";
import { UserDetails } from "../help/context";
import HashLoader from "react-spinners/HashLoader";
import image from "./image.jpg";
function User() {
  const { loading, setloading, setshowData, showData } =
    useContext(UserDetails);

  function load() {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setshowData(true);
    }, 2000);
  }
  let inst = () => {
    load();
  };
  return (
    <div className="user_details">
      {loading && (
        <div className="loaderContainer">
          <HashLoader color={"00000"} loading={loading} size={150} />
        </div>
      )}
      {!loading && !showData && (
        <div
          className="loader"
          style={{ backgroundImage: `URL(${image})`, backgroundSize: `cover` }}
        >
          <div className="details">
            <p>Want to know about our clients? No Problem, </p>
            <p>We've got it for you</p>
            <button onClick={inst}>Get Users</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
