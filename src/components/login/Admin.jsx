import React, { useContext, useEffect, useState } from "react";
import {
  Boton,
  Form,
  InputForm,
  Label,
  Option,
  Select,
} from "../../elements/Formulario";
import { LoginCard, LoginContainer } from "../../elements/Login";
import Message from "../utilities/Message";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { withRouter } from "react-router-dom";
import { UserBoxContext } from "../../context/UserBox";
import { UserAdminContext } from "../../context/AdminContext";
import { PassClientsContext } from "../../context/PassClients";

const Admin = (props) => {
  const [state, setState] = useState("clave_admins");
  const [claves, setClaves] = useState([]);
  const [claveForm, setClaveForm] = useState("");
  const [adminLocal, setAdminLocal] = useState("");
  const [error, setError] = useState(null);
  const local = "CALLAO";
  const { userAdmin, setUserAdmin } = useContext(UserAdminContext);
  const { listPassClients } = useContext(PassClientsContext);

  console.log("password from firebase: ", listPassClients);

  useEffect(() => {
    onSnapshot(collection(db, `sedes/${local}/${state}`), (snapshot) => {
      const arrayData = snapshot.docs.map((doc) => {
        return doc.data();
      });
      console.log(`las claves en admin son: ${arrayData}`);
      setClaves(arrayData);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!claveForm.trim() && !adminLocal.trim()) {
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    setUserAdmin({ local: adminLocal });

    const claveExists = claves.find((c) => c.clave === claveForm);
    claveExists ? props.history.push("/admin-page") : setError(true);
  };
  const handleChange = (e) => {
    setClaveForm(e.target.value);
  };

  const handleSelect = (e) => {
    setAdminLocal(e.target.value);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Form onSubmit={handleSubmit} className="">
          <Label htmlFor="">Ingresa la clave: </Label>
          {error && <Message message="Clave incorrecta" />}
          <InputForm
            type="text"
            placeholder="Ingresa la clave"
            onChange={(e) => handleChange(e)}
          />
          <Select onChange={handleSelect} name="local">
            <option value="">--Seleccione el local--</option>
            <Option value="CHORRILLOS">Chorrillos</Option>
            <Option value="LINCE">Lince</Option>
            <Option value="CALLAO">Callao</Option>
          </Select>

          {/* {error && <Message message="No existe la clave" />} */}
          <Boton type="submit">Ingresar</Boton>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default withRouter(Admin);
