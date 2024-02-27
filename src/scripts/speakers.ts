import angeles from '../images/angeles-vazquez.jpeg';
import elena from '../images/elena-guidi.jpeg';
import carlos from '../images/carlos-azaustre.png';
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
        position: 'Creador de Contenido y Profesor',
        image: carlos,
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
    {
        name: 'TBD',
        position: 'Speaker por confirmar',
        image: logo,
    },
];

export default speakers;