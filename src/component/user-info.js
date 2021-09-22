import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { UserDetails } from "../help/context";
import HashLoader from "react-spinners/HashLoader";

import Card from "./card";
function User_info() {
  const { setShowData, ShowData } = useContext(UserDetails);
  const [User, setUser] = useState();
  const [showingCards, setShowingCards] = useState(false);
  useEffect(
    () =>
      fetch(`https://reqres.in/api/users?page=1`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUser(data.data);
          setShowingCards(true);
        }),
    []
  );
  let info = [
    {
      location: "Bangalore",
      phone: "898787690",
      page: "George.com",
    },
    {
      location: "Pune",
      phone: "974424899",
      page: "Janet.com",
    },
    {
      location: "Mumbai",
      phone: "9428473385",
      page: "Emma.com",
    },
    {
      location: "Delhi",
      phone: "9842387483",
      page: "Eve.com",
    },
    {
      location: "Jammu",
      phone: "58394587",
      page: "Charles.com",
    },
    {
      location: "Chennai",
      phone: "937595834",
      page: "Tracey.com",
    },
  ];
  return (
    showingCards && (
      <div className="user-info">
        <h1>Our Users</h1>
        <div className="cards">
          {User.map((data) => {
            return <Card key={User.id} User={data} extra={info[data.id - 1]} />;
          })}
        </div>
      </div>
    )
  );
}

export default User_info;
