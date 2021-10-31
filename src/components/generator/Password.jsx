import React, { useContext, useEffect, useState } from "react";
import { Boton } from "../../elements/Formulario";
import {
  GeneratorContainer,
  ListPass,
  PassContainer,
} from "../../elements/Password";
import generator from "generate-password";
import { db } from "../../firebase";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { PassClientsContext } from "../../context/PassClients";

const Password = () => {
  const [passWord, setPassWord] = useState([]);
  const { listPassClients, setlistPassClients } =
    useContext(PassClientsContext);

  const password = generator.generate({
    length: 5,
    numbers: true,
  });

  const local = "CALLAO";
  const state = "clave_clientes";

  const handleClick = async () => {
    setPassWord(password);

    await addDoc(collection(db, `sedes/${local}/${state}`), {
      name: password,
    });
  };

  useEffect(() => {
    onSnapshot(collection(db, `sedes/${local}/${state}`), (snapshot) => {
      const arrayPassClients = snapshot.docs.map((pass) => {
        return pass.data();
      });
      setlistPassClients(arrayPassClients);
    });
  }, []);

  return (
    <PassContainer>
      <GeneratorContainer className="column1">
        <h2>Generador de Contraseña</h2>
        <Boton onClick={handleClick}>Generar una contraseña</Boton>
      </GeneratorContainer>
      <ListPass className="listPass">
        <ul>
          {listPassClients.map((pass) => (
            <li>{pass.name}</li>
          ))}
        </ul>
      </ListPass>
    </PassContainer>
  );
};

export default Password;
