import React, { useContext, useEffect, useState } from "react";
import { Boton } from "../../elements/Formulario";
import {
  ButtonDelete,
  GeneratorContainer,
  ListPass,
  MenuPass,
  PassContainer,
} from "../../elements/Password";
import generator from "generate-password";
import { db } from "../../firebase";
import {
  onSnapshot,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
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
        return { id: pass.id, ...pass.data() };
      });
      console.log("las claves son :D : ", arrayPassClients);
      setlistPassClients(arrayPassClients);
    });
  }, []);

  const deletePass = async (id) => {
    try {
      await deleteDoc(doc(db, `sedes/${local}/${state}`, id));
    } catch (error) {
      console.log("Hubo un error en la eliminación de contraseña");
    }
  };

  return (
    <PassContainer>
      <GeneratorContainer className="column1">
        <h2>Generador de Contraseña</h2>
        <Boton onClick={handleClick}>Generar una contraseña</Boton>
      </GeneratorContainer>
      <ListPass className="listPass">
        <h2 className="text-center">Contraseñas Generadas</h2>
        <ul>
          {listPassClients.map((pass) => (
            <>
              <MenuPass key={pass.id}>
                {pass.name}
                <ButtonDelete onClick={() => deletePass(pass.id)}>
                  Eliminar
                </ButtonDelete>
              </MenuPass>
            </>
          ))}
        </ul>
      </ListPass>
    </PassContainer>
  );
};

export default Password;
