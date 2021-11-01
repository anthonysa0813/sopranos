import React, { useEffect, useState } from "react";
import { DjContainer, DjListMusic, MusicItem } from "../../elements/Dj";
import { db } from "../../firebase";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import { ButtonDelete } from "../../elements/Password";

const Dj = () => {
  const [musics, setMusics] = useState([]);
  const local = "CALLAO";
  const state = "list-music";

  useEffect(() => {
    onSnapshot(collection(db, `sedes/${local}/${state}`), (snapshot) => {
      const arrayData = snapshot.docs.map((doc) => {
        console.log(doc.id);
        return { id: doc.id, ...doc.data() };
      });
      setMusics(arrayData);
      console.log(`las canciones son:`, arrayData);
    });
  }, []);

  const deleteMusic = async (id) => {
    console.log(id);
    try {
      await deleteDoc(doc(db, `sedes/${local}/${state}`, id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DjContainer>
      <h1>Dj's admin - Lista de canciones pedidas por usuarios</h1>
      <DjListMusic>
        <ul>
          {musics.map((music) => (
            <MusicItem>
              <li key={music.id}>{music.name}</li>
              <ButtonDelete onClick={() => deleteMusic(music.id)}>
                Eliminar
              </ButtonDelete>
            </MusicItem>
          ))}
        </ul>
      </DjListMusic>
    </DjContainer>
  );
};

export default Dj;
