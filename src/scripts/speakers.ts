import angeles from '../images/angeles-vazquez.jpeg';
import elena from '../images/elena-guidi.jpeg';
import carlos from '../images/carlos-azaustre.jpg';
import carmen from '../images/carmen-ansio.jpg';
import silvia from '../images/silvia-espana.jpg';
import manuel from '../images/manuel-lemos.jpeg';
import nicolas from '../images/nicolas-patarino.jpg';
import paola from '../images/paola-garcia.jpeg';
import antonio from '../images/antonio-leiva.jpg';
import type {ImageMetadata} from "astro";

export interface Talk {
    title: string;
    description: string;
}

export interface Speaker {
    name: string;
    position: string;
    image: ImageMetadata;
    xProfile: string | null;
    linkedin: string | null;
    instagram: string | null;
    youtube: string | null;
    site: string | null;
    talk: Talk;
}

const speakers: Speaker[] = [
    {
        name: 'Elena Guidi',
        position: 'Software Engineer @ SEAT CODE',
        image: elena,
        xProfile: null,
        linkedin: null,
        instagram: null,
        youtube: null,
        site: null,
        talk: {
            title: 'TBD',
            description: 'TBD'
        }
    },
    {
        name: 'Ángeles Vázquez',
        position: 'Android Software Engineer @ Eventbrite',
        image: angeles,
        xProfile: 'https://x.com/avazpar',
        linkedin: 'https://www.linkedin.com/in/angeles-vazquez-parra',
        instagram: 'https://www.instagram.com/vp.angeles/',
        youtube: 'https://www.youtube.com/@vp.angeles',
        site: null,
        talk: {
            title: '¿Has oído? Accesibilidad para aplicaciones móviles',
            description: 'Únete a esta charla dónde exploraremos el impacto y la importancia de la accesibilidad en el diseño de aplicaciones móviles. En un mundo cada vez más conectado, es crucial garantizar que nuestras aplicaciones sean inclusivas y accesibles para todos los usuarios, independientemente de sus capacidades.\n\n' +
                'Revisaremos todas las herramientas que tenemos a nuestro alcance como desarrolladores para mejorar la experiencia de usuario de nuestras aplicaciones móviles, para que sean mucho más  accesibles y poner en primer lugar a quienes realmente importan, nuestros usuarios. \n' +
                '\n' +
                '¡Prepárate para inspirarte y cambiar tu enfoque hacia el desarrollo de aplicaciones más inclusivas!'
        }
    },
    {
        name: 'Carlos Azaustre',
        position: 'Creador de Contenido y Formador',
        image: carlos,
        xProfile: null,
        linkedin: null,
        instagram: null,
        youtube: null,
        site: null,
        talk: {
            title: 'TBD',
            description: 'TBD'
        }
    },
    {
        name: 'Carmen Ansio',
        position: 'Design Engineer @ LottieFiles',
        image: carmen,
        xProfile: 'https://x.com/carmenansio',
        linkedin: 'https://www.linkedin.com/in/carmenansio/',
        instagram: 'https://www.instagram.com/carmenansio/',
        youtube: 'https://www.youtube.com/carmenansio',
        site: null,
        talk: {
            title: 'Diseño ético en productos digitales',
            description: 'En esta charla, exploraremos el crucial papel del diseño ético en el mundo digital. Descubriremos cómo los principios éticos pueden moldear significativamente las decisiones de diseño UX y desarrollo web, garantizando experiencias digitales que respeten y protejan a los usuarios. Desde la accesibilidad hasta la privacidad y la inclusión, aprenderemos cómo implementar prácticas éticas para crear productos web que no solo cautiven, sino que también promuevan un impacto positivo y perdurable en la experiencia del usuario.'
        }
    },
    {
        name: 'Silvia España',
        position: 'iOS Developer @ WeFox',
        image: silvia,
        xProfile: null,
        linkedin: null,
        instagram: null,
        youtube: null,
        site: null,
        talk: {
            title: 'TBD',
            description: 'TBD'
        }
    },
    {
        name: 'Manuel S. Lemos',
        position: 'CTO @ Sincrolab',
        image: manuel,
        xProfile: 'https://x.com/ManuelS_Lemos',
        linkedin: 'https://www.linkedin.com/in/manuelslemos/',
        instagram: 'https://www.instagram.com/manuelslemos/',
        youtube: 'https://www.youtube.com/c/ManuelS_Lemos',
        site: 'https://manuelslemos.es',
        talk: {
            title: 'No hay mejor "IA" que un "IF"',
            description: 'Exploraremos el provocador concepto de que, en ciertos contextos, un simple IF puede ser más eficaz que la complejidad de la inteligencia artificial. A través de una serie de ejemplos prácticos y casos de estudio, examinaremos las situaciones en las que soluciones sencillas y directas superan a los enfoques más avanzados y elaborados de la IA.'
        }
    },
    {
        name: 'Nicolás Patarino',
        position: 'Staff Software Engineer @ Eventbrite',
        image: nicolas,
        xProfile: 'https://x.com/npatarino',
        linkedin: 'https://linkedin.com/in/npatarino',
        instagram: 'https://instagram.com/npatarino',
        youtube: 'https://youtube.com/c/ChimichurriCode',
        site: 'https://chimi.pro',
        talk: {
            title: 'El programador consciente',
            description: '"En este viaje 🚀  llamado carrera profesional, muchos de nosotros aspiramos a escalar, a subir de nivel. Pero, ¿alguna vez te has preguntado por qué, a pesar de tus esfuerzos, ese ascenso parece siempre estar a un pasito de distancia, pero no llega?\n' +
                '\n' +
                'En esta charla, vamos a desentrañar juntos el misterio detrás de las promociones esquivas.\n' +
                '\n' +
                'Con una mezcla de consejos prácticos, tips directos y experiencias personales, esta charla te llevará a través de un recorrido introspectivo y revelador. 🧐"'
        }
    },
    {
        name: 'Paola García',
        position: 'Co-Founder @ StressTech.io',
        image: paola,
        xProfile: null,
        linkedin: null,
        instagram: null,
        youtube: null,
        site: null,
        talk: {
            title: 'TBD',
            description: 'TBD'
        }
    },
    {
        name: 'Antonio Leiva',
        position: 'CEO y Formador @ DevExpert',
        image: antonio,
        xProfile: null,
        linkedin: null,
        instagram: null,
        youtube: null,
        site: null,
        talk: {
            title: 'TBD',
            description: 'TBD'
        }
    }
];

export default speakers;