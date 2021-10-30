import React, { useContext, useEffect, useState } from "react";
import {
  Boton,
  Form,
  InputForm,
  Label,
  Option,
  Select,
} from "../../elements/Formulario";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { withRouter } from "react-router-dom";
import Message from "../utilities/Message";
import { UserBoxContext } from "../../context/UserBox";

const Formulario = (props) => {
  const [claves, setClaves] = useState([]);
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState(null);
  const [state, setState] = useState("clave_cliente");
  const context = useContext(UserBoxContext);
  const { userBox, setUserBox } = context;

  useEffect(() => {
    onSnapshot(collection(db, state), (snapshot) => {
      const arrayData = snapshot.docs.map((doc) => {
        return { ...doc.data() };
      });
      setClaves(arrayData);
    });
  }, []);

  const handleChange = (e) => {
    setUserPass(e.target.value);
  };

  const handleSelect = (e) => {
    setUserBox({
      ...userBox,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userPass.trim()) {
      console.log("Userpass no existeeeee");
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    const permisoValidation = claves.find((c) => c.clave === userPass); //[]
    console.log(permisoValidation ? "Existee" : "No existeee buhh :x");
    permisoValidation ? props.history.push("/user-page") : setError(true);
    console.log("user: ", userBox);
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit} className="">
      <Label htmlFor="">Ingresa la clave: </Label>
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
      <Select onChange={handleSelect} name="box">
        <option value="">--Seleccione el número de box--</option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
      {error && <Message message="No existe la clave" />}
      <Boton type="submit">Ingresar</Boton>
    </Form>
  );
};

export default withRouter(Formulario);
