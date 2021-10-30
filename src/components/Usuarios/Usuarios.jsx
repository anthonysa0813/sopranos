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
      id: 1,
      name: "dale con todo",
    },
    {
      id: 2,
      name: "kUSH - Main",
    },
    {
      id: 3,
      name: "why the thugs",
    },
    {
      id: 4,
      name: "Even you brutus?",
    },
    {
      id: 5,
      name: "You can do it",
    },
    {
      id: 6,
      name: "It was a good day",
    },
    {
      id: 7,
      name: "Man Down",
    },
    {
      id: 8,
      name: "Sure thing",
    },
    {
      id: 9,
      name: "Nocturnal",
    },
    {
      id: 10,
      name: "Vete",
    },
    {
      id: 11,
      name: "Free - 6BLACK",
    },
    {
      id: 12,
      name: "Vertigo - khalid",
    },
    {
      id: 13,
      name: "Leave me ",
    },
    {
      id: 14,
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
      id: music.id,
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
