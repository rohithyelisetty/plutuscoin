import React from "react";
import Brand from './Brand';
import User from './User';
import { useUserContext } from "../userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  const nametype = user.displayName;
  console.log(nametype);
  const [name, ...brand_data] = nametype.split(';');
  const userType = brand_data.at(-1);

  return (
    (userType == "Brand" ? <Brand /> : <User />)
  );
};

export default Dashboard
