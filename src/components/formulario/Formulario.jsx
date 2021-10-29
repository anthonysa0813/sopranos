import React, { useEffect, useState } from "react";
import { Boton, Form, InputForm, Label } from "../../elements/Formulario";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { Redirect } from "react-router-dom";
import Message from "../utilities/Message";

const Formulario = () => {
  const [claves, setClaves] = useState([]);
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    onSnapshot(collection(db, "clave_cliente"), (snapshot) => {
      const arrayData = snapshot.docs.map((doc) => {
        return { ...doc.data() };
      });
      setClaves(arrayData);
    });
  }, []);

  const handleChange = (e) => {
    setUserPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userPass.trim()) {
      console.log("Userpass no existee");
      return;
    }
    const permisoValidation = claves.find((c) => c.clave === userPass); //[]
    // if (permisoValidation.length === 0) {
    //   setError(true);
    // }
    // console.log(permisoValidation ? "Existee" : "No existeee buhh :x");

    permisoValidation ? <Redirect to="/karaoke-users" /> : setError(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="">Ingresa la clave: </Label>
      <InputForm type="text" onChange={(e) => handleChange(e)} />
      {error && <Message message="No existe la clave" />}
      <Boton type="submit">Ingresar</Boton>
    </Form>
  );
};

export default Formulario;
