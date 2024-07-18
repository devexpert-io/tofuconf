export interface ScheduleItem {
    time: string;
    isSpecial?: boolean;
    talk: Talk;
    speaker?: string;
}

export interface Talk {
    title: string;
    description?: string;
}


const schedule: ScheduleItem[] = [
    {
        time: '10:00',
        talk: {title: 'Apertura'},
        isSpecial: true
    },
    {
        time: '10:15',
        talk: {
            title: 'Pinceladas de verde: hacia un futuro más sostenible en IT',
            description: `Esta charla te dará un “manual de supervivencia” para entender todo esto del green computing! 

Vamos a dar unas pinceladas sobre los conceptos principales a conocer.

Desde una visión sobre la situación medioambiental general, hasta la influencia que tiene la tecnología en esto, exploraremos las innovaciones verdes en el sector IT.

Entre otras cosas, veremos cuál es el impacto de nuestro sector, cómo podemos medirlo y cómo contribuir para ir hacia un futuro más sostenible.`
        },
        speaker: 'elena-guidi'
    },
    {
        time: '11:00',
        talk: {
            title: '¿Has oído? Accesibilidad para aplicaciones móviles',
            description: `Únete a esta charla dónde exploraremos el impacto y la importancia de la accesibilidad en el diseño de aplicaciones móviles. 
            
En un mundo cada vez más conectado, es crucial garantizar que nuestras aplicaciones sean inclusivas y accesibles para todos los usuarios, independientemente de sus capacidades.

Revisaremos todas las herramientas que tenemos a nuestro alcance como desarrolladores para mejorar la experiencia de usuario de nuestras aplicaciones móviles, para que sean mucho más accesibles y poner en primer lugar a quienes realmente importan, nuestros usuarios.

¡Prepárate para inspirarte y cambiar tu enfoque hacia el desarrollo de aplicaciones más inclusivas!`
        },
        speaker: 'angeles-vazquez'
    },
    {
        time: '11:45',
        talk: {title: 'Coffee Break, patrocinado por CryptoCafe'},
        isSpecial: true
    },
    {
        time: '12:15',
        talk: {
            title: 'No hay mejor "IA" que un "IF"',
            description: `Exploraremos el provocador concepto de que, en ciertos contextos, un simple IF puede ser más eficaz que la complejidad de la inteligencia artificial. 

A través de una serie de ejemplos prácticos y casos de estudio, examinaremos las situaciones en las que soluciones sencillas y directas superan a los enfoques más avanzados y elaborados de la IA.`
        },
        speaker: 'manuel-s-lemos'
    },
    {
        time: '13:00',
        talk: {
            title: 'Diseño ético en productos digitales',
            description: `En esta charla, exploraremos el crucial papel del diseño ético en el mundo digital. 
            
Descubriremos cómo los principios éticos pueden moldear significativamente las decisiones de diseño UX y desarrollo web, garantizando experiencias digitales que respeten y protejan a los usuarios. 

Desde la accesibilidad hasta la privacidad y la inclusión, aprenderemos cómo implementar prácticas éticas para crear productos web que no solo cautiven, sino que también promuevan un impacto positivo y perdurable en la experiencia del usuario.`
        },
        speaker: 'carmen-ansio'
    },
    {
        time: '14:00',
        talk: {title: 'Comida'},
        isSpecial: true
    },
    {
        time: '15:30',
        talk: {
            title: 'Mentorías que transforman: Inclusión y diversidad en el mundo tech',
            description: `¿Cómo puede la diversidad transformar la tecnología? 
            
En "Mentorías que transforman: Inclusión y diversidad en el mundo tech", exploraremos el impacto profundo de la diversidad en la innovación y la capacidad de resolver problemas dentro de los equipos tecnológicos. 
            
Discutiremos los desafíos que enfrentan personas subrepresentadas, como mujeres, personas racializadas y personas con discapacidades, y cómo el mentorado puede desempeñar un papel fundamental en la creación de un entorno inclusivo donde todas las voces puedan contribuir plenamente. 

Únete a nosotros para explorar cómo la colaboración y mentorización de talentos diversos puede impulsar la tecnología hacia soluciones más innovadoras y sociales, construyendo un futuro tech verdaderamente inclusivo.`
        },
        speaker: 'silvia-espana'
    },
    {
        time: '16:15',
        talk: {
            title: 'El autismo es un espectro más grande de lo que crees',
            description: `Hablamos de la condición del espectro autista. 

Derribando mitos y cómo es más común de lo que creemos.`
        },
        speaker: 'carlos-azaustre'
    },
    {
        time: '17:00',
        talk: {title: 'Coffee Break, patrocinado por CryptoCafe'},
        isSpecial: true
    },
    {
        time: '17:30',
        talk: {
            title: 'El programador consciente',
            description: `En este viaje 🚀 llamado carrera profesional, muchos de nosotros aspiramos a escalar, a subir de nivel. 
            
Pero, ¿alguna vez te has preguntado por qué, a pesar de tus esfuerzos, ese ascenso parece siempre estar a un pasito de distancia, pero no llega?

En esta charla, vamos a desentrañar juntos el misterio detrás de las promociones esquivas.

Con una mezcla de consejos prácticos, tips directos y experiencias personales, esta charla te llevará a través de un recorrido introspectivo y revelador. 🧐`
        },
        speaker: 'nicolas-patarino'
    },
    {
        time: '18:15',
        talk: {
            title: 'El poder de hacer visible lo invisible: ansiedad, depresión en las aulas, DNA y Neurodivergencia',
            description: `Durante los últimos años de mi carrera profesional en tech, he estado descifrando aquella tecnologia que permite que lo invisible sea visible. 
            
Lo comparto con vosotros en esta charla. 

- Piloto salud mental en las aulas madrileñas con Puerta de Innovación del Ayuntamiento. 
- Selfdecode ¿hay datos en el ADN que nos predispongan?. 
- Score de estrés, ansiedad y burnout con Iridis de mi empresa Stresstech.io
- FAN Acción Neurodivergente Entidad sin Animo de Lucro que estoy cofundando.`
        },
        speaker: 'paola-garcia'
    },
    {
        time: '19:00',
        talk: {title: 'Cierre'},
        isSpecial: true
    },
];

export default schedule;