export interface ScheduleItem {
    time: string;
    title: string;
    isSpecial?: boolean; // Optional property
}

const schedule: ScheduleItem[] = [
    { time: '10:00', title: 'Registro y café', isSpecial: true },
    { time: '10:30', title: 'Apertura', isSpecial: true },
    { time: '10:45', title: 'Charla TBD' },
    { time: '11:30', title: 'Charla TBD' },
    { time: '12:15', title: 'Charla TBD' },
    { time: '13:00', title: 'Charla TBD' },
    { time: '14:00', title: 'Comida', isSpecial: true },
    { time: '15:30', title: 'Charla TBD' },
    { time: '16:15', title: 'Charla TBD' },
    { time: '17:00', title: 'Charla TBD' },
    { time: '17:45', title: 'Charla TBD' },
    { time: '18:30', title: 'Cierre', isSpecial: true },
];

export default schedule;