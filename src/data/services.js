import masaje from "../assets/masaje.jpg";
import cortePelo from "../assets/corte-pelo.jpg";
import barba from "../assets/barba.jpg";
import cejas from "../assets/cejas.jpg";
import depilacion from "../assets/depilacion.jpg";

// Subservicios con imágenes
import relajante from "../assets/masaje-relajante.jpg";
import deportivo from "../assets/masaje-deportivo.jpg";
import piedras from "../assets/masaje-piedras.jpg";

import buzzcut from "../assets/buzzcut.jpg";
import mullet from "../assets/mullet.jpg";
import undercut from "../assets/undercut.jpg";
import fade from "../assets/fade.jpg";

import barbaCompleta from "../assets/barba-completa.jpg";
import barbaDelineada from "../assets/barba-delineada.jpg";
import bigote from "../assets/bigote.jpg";

import cejasTijera from "../assets/cejas-tijera.jpg";
import cejasCera from "../assets/cejas-cera.jpg";
import cejasHilo from "../assets/cejas-hilo.jpg";

import depCera from "../assets/depilacion-cera.jpg";
import depHilo from "../assets/depilacion-hilo.jpg";
import depLaser from "../assets/depilacion-laser.jpg";

export const services = [
  {
    id: "masaje",
    name: "Masaje",
    desc: "Relájate con un masaje terapéutico.",
    img: masaje,
    subservices: [
      { name: "Masaje relajante", img: relajante },
      { name: "Masaje deportivo", img: deportivo },
      { name: "Masaje con piedras calientes", img: piedras },
    ],
  },
  {
    id: "corte-pelo",
    name: "Corte de pelo",
    desc: "Un look fresco y moderno.",
    img: cortePelo,
    subservices: [
      { name: "Buzz cut", img: buzzcut },
      { name: "Mullet", img: mullet },
      { name: "Undercut", img: undercut },
      { name: "Fade clásico", img: fade },
    ],
  },
  {
    id: "corte-barba",
    name: "Corte de barba",
    desc: "Define tu estilo con precisión.",
    img: barba,
    subservices: [
      { name: "Barba completa", img: barbaCompleta },
      { name: "Barba delineada", img: barbaDelineada },
      { name: "Bigote clásico", img: bigote },
    ],
  },
  {
    id: "corte-cejas",
    name: "Corte de cejas",
    desc: "Dale forma a tu mirada.",
    img: cejas,
    subservices: [
      { name: "Perfilado con tijera", img: cejasTijera },
      { name: "Perfilado con cera", img: cejasCera },
      { name: "Perfilado con hilo", img: cejasHilo },
    ],
  },
  {
    id: "depilacion",
    name: "Depilación",
    desc: "Piel suave y libre de vello.",
    img: depilacion,
    subservices: [
      { name: "Depilación con cera", img: depCera },
      { name: "Depilación con hilo", img: depHilo },
      { name: "Depilación láser", img: depLaser },
    ],
  },
];