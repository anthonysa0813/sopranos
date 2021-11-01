import React, { useContext, useEffect, useState } from "react";
import {
  HeroContainer,
  InfoContainer,
  ListMusic,
  MusicAdvanced,
  MusicContentList,
  TitleMusic,
} from "../../elements/Usuarios";
import hero2 from "../../assets/images/hero2.jpg";
import { UserBoxContext } from "../../context/UserBox";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const Usuarios = () => {
  const context = useContext(UserBoxContext);
  const { userBox } = context;
  const { box, local } = userBox;
  const [musicActual, setMusicActual] = useState([]);
  const dataMusic = [
    {
      name: "dale con todo",
    },
    {
      name: "kUSH - Main",
    },
    {
      name: "why the thugs",
    },
    {
      name: "Even you brutus?",
    },
    {
      name: "You can do it",
    },
    {
      name: "It was a good day",
    },
    {
      name: "Man Down",
    },
    {
      name: "Sure thing",
    },
    {
      name: "Nocturnal",
    },
    {
      name: "Vete",
    },
    {
      name: "Free - 6BLACK",
    },
    {
      name: "Vertigo - khalid",
    },
    {
      name: "Leave me ",
    },
    {
      name: "The reign",
    },
  ];

  useEffect(() => {
    onSnapshot(collection(db, `sedes/${local}/list-music`), (snapshot) => {
      const arrayListMusic = snapshot.docs.map((music) => {
        return music.data();
      });
      console.log(arrayListMusic);
      setMusicActual([...musicActual, ...arrayListMusic]);
    });
  }, []);

  const handleClick = async (music) => {
    console.log(music);
    await addDoc(collection(db, `sedes/${local}/list-music`), {
      name: music.name,
    });
  };

  return (
    <>
      <HeroContainer className="hero-User">
        <img src={hero2}></img>
      </HeroContainer>
      <div className="wrapper">
        <h2 className="text-center">
          Local: {local} - box: {box}
        </h2>

        <InfoContainer className="infoContainer ">
          <ListMusic className="listMusic">
            <TitleMusic>
              <h3>Lista de Canciones</h3>
            </TitleMusic>
            <div className="menuList">
              <ul>
                {dataMusic.map((music) => (
                  <MusicContentList className="">
                    <li key={music.name}>{music.name}</li>
                    <button onClick={() => handleClick(music)}>
                      Poner a la cola
                    </button>
                  </MusicContentList>
                ))}
              </ul>
            </div>
          </ListMusic>
          <MusicAdvanced className="MusicAdvanced">
            <TitleMusic>
              <h3>Música en Cola</h3>
            </TitleMusic>
            {musicActual.map((music) => (
              <p className="text-center">{music.name}</p>
            ))}
          </MusicAdvanced>
        </InfoContainer>
      </div>
    </>
  );
};

export default Usuarios;
