import angeles from '../images/angeles-vazquez.jpeg';
import elena from '../images/elena-guidi.jpeg';
import carlos from '../images/carlos-azaustre.png';
import carmen from '../images/carmen-ansio.jpeg';
import silvia from '../images/silvia-espana.jpeg';
import manuel from '../images/manuel-lemos.jpeg';
import antonio from '../images/antonio-leiva.jpg';
import logo from '../images/logo.png';
import type {ImageMetadata} from "astro";

export interface Speaker {
    name: string;
    position: string;
    image: ImageMetadata;
}

const speakers: Speaker[] = [
    {
        name: 'Elena Guidi',
        position: 'Software Engineer @ SEAT CODE',
        image: elena,
    },
    {
        name: 'Ángeles Vázquez',
        position: 'Android Software Engineer @ Eventbrite',
        image: angeles,
    },
    {
        name: 'Carlos Azaustre',
        position: 'Creador de Contenido y Formador',
        image: carlos,
    },
    {
        name: 'Carmen Ansio',
        position: 'Freelance UX Engineer',
        image: carmen,
    },
    {
        name: 'Silvia España',
        position: 'iOS Developer @ WeFox',
        image: silvia,
    },
    {
        name: 'Manuel S. Lemos',
        position: 'Full Stack & AI Developer @ BeDisruptive',
        image: manuel,
    },
    {
        name: 'Antonio Leiva',
        position: 'CEO y Formador @ DevExpert',
        image: antonio,
    },
    {
        name: 'TBD',
        position: 'Speaker por confirmar',
        image: logo,
    },
    {
        name: 'TBD',
        position: 'Speaker por confirmar',
        image: logo,
    },
];

export default speakers;