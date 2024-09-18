import React, { useState } from "react";
import inicio from "../images/page-0002.jpg";
import mapa from "../images/planoesummit2024 (1).png";
import telesing from "../videos/Telesign.mp4";
import payu from "../videos/payu.mp4";
import pow from "../videos/Pow.mp4";
import Emblue from "../videos/emBlue.mp4";
import sde from "../videos/sde.mp4";
import servientrega from "../videos/Servientrega.mp4";
import Vtex from "../videos/Vtex.mp4";
import Yandex from "../videos/Yandex.mp4";
import Regnum from "../videos/Regnum.mp4";
import PasarEx from "../videos/PasarEx.mp4"
import coordinadora from "../videos/Coordinadora.mp4"
import ingeneo from "../videos/Ingeneo.mp4"
import cubik from "../videos/Cubik.mp4"
import dropi from "../videos/Dropi.mp4"
import mocion from "../videos/Moción.mp4"
import Data4Sales from "../videos/Data4Sales.mp4"



const Inicio = () => {
  const [mostrarMapa, setMostrarMapa] = useState(false);
  const [mostrarVideoRojo, setMostrarVideoRojo] = useState(false);
  const [mostrarVideoAzul, setMostrarVideoAzul] = useState(false);
  const [mostrarVideoGris, setMostrarVideoGris] = useState(false);
  const [mostrarVideoGreen, setMostrarVideoGreen] = useState(false);
  const [mostrarVideo5, setMostrarVideo5] = useState(false);
  const [mostrarVideo6, setMostrarVideo6] = useState(false);
  const [mostrarVideo7, setMostrarVideo7] = useState(false);
  const [mostrarVideo8, setMostrarVideo8] = useState(false);
  const [mostrarVideo9, setMostrarVideo9] = useState(false);
  const [mostrarVideo10, setMostrarVideo10] = useState(false);
  const [mostrarVideo11, setMostrarVideo11] = useState(false);
  const [mostrarVideo12, setMostrarVideo12] = useState(false);
  const [mostrarVideo13, setMostrarVideo13] = useState(false);
  const [mostrarVideo14, setMostrarVideo14] = useState(false);
  const [mostrarVideo15, setMostrarVideo15] = useState(false);
  const [mostrarVideo16, setMostrarVideo16] = useState(false);
  


  const handleClickImagen = () => {
    setMostrarMapa(true);
  };

  const handleClickDivRojo = () => {
    setMostrarVideoRojo(true);
  };

  const handleClickDivAzul = () => {
    setMostrarVideoAzul(true);
  };

  const handleClickDivGris = () => {
    setMostrarVideoGris(true);
  };

  const handleClickDivGreen = () => {
    setMostrarVideoGreen(true);
  };

  const handleClickDiv5 = () => {
    setMostrarVideo5(true);
  };

  const handleClickDiv6 = () => {
    setMostrarVideo6(true);
  };

  const handleClickDiv7 = () => {
    setMostrarVideo7(true);
  };

  const handleClickDiv8 = () => {
    setMostrarVideo8(true);
  };

  const handleClickDiv9 = () => {
    setMostrarVideo9(true);
  };

  const handleClickDiv10 = () => {
    setMostrarVideo10(true);
  };

  const handleClickDiv11 = () => {
    setMostrarVideo11(true);
  };

  const handleClickDiv12 = () => {
    setMostrarVideo12(true);
  };

  const handleClickDiv13 = () => {
    setMostrarVideo13(true);
  };

  const handleClickDiv14 = () => {
    setMostrarVideo14(true);
  };

  const handleClickDiv15 = () => {
    setMostrarVideo15(true);
  };

  const handleClickDiv16 = () => {
    setMostrarVideo16(true);
  };

  const handleVideoRojoEnd = () => {
    setTimeout(() => {
      setMostrarVideoRojo(false);
      setMostrarMapa(false); // Muestra el mapa después de 2 segundos
    }, 4000);
  };

  const handleVideoAzulEnd = () => {
    setTimeout(() => {
      setMostrarVideoAzul(false);
      setMostrarMapa(false);
    }, 4000);
  };

  const handleVideoGrisEnd = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideoGris(false);
    }, 4000);
  };

  const handleVideoGreenEnd = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideoGreen(false);
    }, 4000);
  };

  const handleVideo5End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo5(false);
    }, 4000);
  };

  const handleVideo6End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo6(false);
    }, 4000);
  };

  const handleVideo7End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo7(false);
    }, 4000);
  };

  const handleVideo8End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo8(false);
    }, 4000);
  };

  const handleVideo9End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo9(false);
    }, 4000);
  };

  const handleVideo10End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo10(false);
    }, 4000);
  };

  const handleVideo11End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo11(false);
    }, 4000);
  };

  const handleVideo12End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo12(false);
    }, 4000);
  };

  const handleVideo13End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo13(false);
    }, 4000);
  };

  const handleVideo14End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo14(false);
    }, 4000);
  };

  const handleVideo15End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo15(false);
    }, 4000);
  };

  const handleVideo16End = () => {
    setTimeout(() => {
      setMostrarMapa(false);
      setMostrarVideo16(false);
    }, 4000);
  };

  return (
    <div className="relative w-full h-auto">
      <img
        src={mostrarMapa ? mapa : inicio}
        alt="Inicio"
        className="w-full h-auto object-cover cursor-pointer"
        onClick={handleClickImagen}
      />

      {mostrarMapa && (
        <>
          <div
            className="absolute top-[20.5%] left-[45%] w-14 h-14  opacity-50 cursor-pointer"
            onClick={handleClickDivRojo}
          ></div>
          <div
            className="absolute top-[20.5%] left-[51%] w-14 h-14  opacity-50 cursor-pointer"
            onClick={handleClickDivAzul}
          ></div>
          <div
            className="absolute top-[20.5%] left-[58%] w-14 h-14  opacity-50 cursor-pointer"
            onClick={handleClickDivGris}
          ></div>
          <div
            className="absolute top-[30.5%] left-[32%] w-16 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDivGreen}
          ></div>
           <div
            className="absolute top-[31%] left-[52%] w-32 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDiv5}
          ></div>
          <div
            className="absolute top-[15%] left-[92%] w-32 h-24  opacity-50 cursor-pointer"
            onClick={handleClickDiv6}
          ></div>
          <div
            className="absolute top-[29%] left-[74%] w-32 h-32  opacity-50 cursor-pointer"
            onClick={handleClickDiv7}
          ></div>
          <div
            className="absolute top-[36%] left-[74%] w-32 h-28  opacity-50 cursor-pointer"
            onClick={handleClickDiv8}
          ></div>
          <div
            className="absolute top-[21.5%] right-[0%] w-16 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDiv9}
          ></div>
          <div
            className="absolute top-[25.2%] right-[0%] w-16 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDiv10}
          ></div>
          <div
            className="absolute top-[29.5%] right-[0%] w-20 h-24  opacity-50 cursor-pointer"
            onClick={handleClickDiv11}
          ></div>
          <div
            className="absolute top-[35.2%] right-[0%] w-20 h-20  opacity-50 cursor-pointer"
            onClick={handleClickDiv12}
          ></div>
          <div
            className="absolute top-[40%] right-[0%] w-20 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDiv13}
          ></div>
          <div
            className="absolute top-[43.5%] right-[0%] w-20 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDiv14}
          ></div>
          <div
            className="absolute top-[10%] right-[8%] w-28 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDiv15}
          ></div>
          <div
            className="absolute top-[31%] right-[50%] w-12 h-16  opacity-50 cursor-pointer"
            onClick={handleClickDiv16}
          ></div>
        </>
      )}

      {mostrarVideoRojo && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={payu}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideoRojoEnd} // Evento cuando el video rojo termina
          />
        </div>
      )}

      {mostrarVideoAzul && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={telesing}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideoAzulEnd} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideoGris && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={pow}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideoGrisEnd} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideoGreen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={Emblue}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideoGreenEnd} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo5 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={sde}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo5End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo6 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={servientrega}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo6End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo7 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={Vtex}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo7End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo8 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={Yandex}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo8End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo9 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={Regnum}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo9End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo10 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={PasarEx}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo10End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo11 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={coordinadora}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo11End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo12 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={ingeneo}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo12End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo13 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={cubik}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo13End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo14 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={dropi}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo14End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo15 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={mocion}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo15End} // Evento cuando el video azul termina
          />
        </div>
      )}
      {mostrarVideo16 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <video
            src={Data4Sales}
            autoPlay
            muted
            className="w-full h-auto"
            onEnded={handleVideo16End} // Evento cuando el video azul termina
          />
        </div>
      )}
    </div>
  );
};

export default Inicio;
