import React, { useContext } from "react";
import { HeroContainer } from "../../elements/Usuarios";
import hero from "../../assets/images/hero2.jpg";
import { UserAdminContext } from "../../context/AdminContext";
import Password from "../generator/Password";
import Dj from "../djAdmin/Dj";

const AdminPage = () => {
  const { userAdmin } = useContext(UserAdminContext);
  const { local } = userAdmin;

  return (
    <>
      <HeroContainer>
        <img src={hero} alt="" />
      </HeroContainer>
      <div className="wrapper">
        <h1 className="text-center">Sede: {local} </h1>
        <Password />
        <Dj />
      </div>
    </>
  );
};

export default AdminPage;
