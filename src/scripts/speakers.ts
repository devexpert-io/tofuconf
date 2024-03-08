import angeles from '../images/angeles-vazquez.jpeg';
import elena from '../images/elena-guidi.jpeg';
import carlos from '../images/carlos-azaustre.jpg';
import carmen from '../images/carmen-ansio.jpg';
import silvia from '../images/silvia-espana.jpg';
import manuel from '../images/manuel-lemos.jpeg';
import nicolas from '../images/nicolas-patarino.jpg';
import paola from '../images/paola-garcia.jpeg';
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
        name: 'Nicolás Patarino',
        position: 'Staff Mobile Engineer @ Eventbrite',
        image: nicolas,
    },
    {
        name: 'Paola García',
        position: 'Co-Founder @ StressTech.io',
        image: paola,
    },
    {
        name: 'Antonio Leiva',
        position: 'CEO y Formador @ DevExpert',
        image: antonio,
    },
];

export default speakers;