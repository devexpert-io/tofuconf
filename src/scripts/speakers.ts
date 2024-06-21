import angeles from '../images/angeles-vazquez.jpeg';
import elena from '../images/elena-guidi.jpeg';
import carlos from '../images/carlos-azaustre.jpg';
import carmen from '../images/carmen-ansio.jpg';
import silvia from '../images/silvia-espana.jpg';
import manuel from '../images/manuel-lemos.jpeg';
import nicolas from '../images/nicolas-patarino.jpg';
import paola from '../images/paola-garcia.jpeg';
import type { ImageMetadata } from "astro";

export interface Speaker {
    name: string;
    position: string;
    image: ImageMetadata;
    xProfile: string | null;
    linkedin: string | null;
    instagram: string | null;
    youtube: string | null;
    site: string | null;
    slug: string;
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
        slug: 'elena-guidi'
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
        slug: 'angeles-vazquez'
    },
    {
        name: 'Carlos Azaustre',
        position: 'Creador de Contenido y Formador',
        image: carlos,
        xProfile: 'https://x.com/carlosazaustre',
        linkedin: 'https://linkedin.com/in/carlosazaustre',
        instagram: 'https://instagram.com/carlosazaustre',
        youtube: 'https://youtube.com/@carlosazaustre',
        site: 'https://carlosazaustre.es',
        slug: 'carlos-azaustre'
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
        slug: 'carmen-ansio'
    },
    {
        name: 'Silvia España',
        position: 'iOS Developer',
        image: silvia,
        xProfile: 'https://x.com/fischesil',
        linkedin: 'https://www.linkedin.com/in/silviaespanagil/',
        instagram: null,
        youtube: null,
        site: 'https://dev.to/silviaespanagil',
        slug: 'silvia-espana'
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
        slug: 'manuel-s-lemos'
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
        slug: 'nicolas-patarino'
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
        slug: 'paola-garcia'
    }
];

export default speakers;