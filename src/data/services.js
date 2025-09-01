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
      { 
        name: "Masaje relajante", 
        img: relajante,
        price: 45,
        duration: "60 min",
        description: "Ideal para aliviar el estrés y la tensión muscular"
      },
      { 
        name: "Masaje deportivo", 
        img: deportivo,
        price: 55,
        duration: "60 min",
        description: "Enfocado en zonas de alta tensión muscular"
      },
      { 
        name: "Masaje con piedras calientes", 
        img: piedras,
        price: 65,
        duration: "75 min",
        description: "Combinación de masaje y calor terapéutico"
      },
    ],
  },
  {
    id: "corte-pelo",
    name: "Corte de pelo",
    desc: "Un look fresco y moderno.",
    img: cortePelo,
    subservices: [
      { 
        name: "Buzz cut", 
        img: buzzcut,
        price: 15,
        duration: "30 min",
        description: "Corte corto y uniforme en toda la cabeza"
      },
      { 
        name: "Mullet", 
        img: mullet,
        price: 25,
        duration: "45 min",
        description: "Corto en la parte frontal y largo en la parte posterior"
      },
      { 
        name: "Undercut", 
        img: undercut,
        price: 30,
        duration: "50 min",
        description: "Lados y parte posterior cortos con parte superior larga"
      },
      { 
        name: "Fade clásico", 
        img: fade,
        price: 20,
        duration: "40 min",
        description: "Degradado suave desde corto a más largo"
      },
    ],
  },
  {
    id: "corte-barba",
    name: "Corte de barba",
    desc: "Define tu estilo con precisión.",
    img: barba,
    subservices: [
      { 
        name: "Barba completa", 
        img: barbaCompleta,
        price: 18,
        duration: "30 min",
        description: "Ajuste y perfilado completo de barba"
      },
      { 
        name: "Barba delineada", 
        img: barbaDelineada,
        price: 22,
        duration: "35 min",
        description: "Delineado preciso con líneas definidas"
      },
      { 
        name: "Bigote clásico", 
        img: bigote,
        price: 12,
        duration: "20 min",
        description: "Perfilado y mantenimiento de bigote"
      },
    ],
  },
  {
    id: "corte-cejas",
    name: "Corte de cejas",
    desc: "Dale forma a tu mirada.",
    img: cejas,
    subservices: [
      { 
        name: "Perfilado con tijera", 
        img: cejasTijera,
        price: 10,
        duration: "15 min",
        description: "Diseño natural con tijera profesional"
      },
      { 
        name: "Perfilado con cera", 
        img: cejasCera,
        price: 15,
        duration: "20 min",
        description: "Forma precisa con cera depilatoria"
      },
      { 
        name: "Perfilado con hilo", 
        img: cejasHilo,
        price: 18,
        duration: "25 min",
        description: "Técnica tradicional para un acabado perfecto"
      },
    ],
  },
  {
    id: "depilacion",
    name: "Depilación",
    desc: "Piel suave y libre de vello.",
    img: depilacion,
    subservices: [
      { 
        name: "Depilación con cera", 
        img: depCera,
        price: 25,
        duration: "45 min",
        description: "Depilación suave y duradera con cera caliente"
      },
      { 
        name: "Depilación con hilo", 
        img: depHilo,
        price: 30,
        duration: "60 min",
        description: "Técnica precisa para áreas sensibles"
      },
      { 
        name: "Depilación láser", 
        img: depLaser,
        price: 80,
        duration: "60 min",
        description: "Solución permanente con tecnología láser"
      },
    ],
  },
];