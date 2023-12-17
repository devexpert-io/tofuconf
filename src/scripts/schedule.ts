export interface ScheduleItem {
    time: string;
    title: string;
    isSpecial?: boolean; // Optional property
}

const schedule: ScheduleItem[] = [
    { time: '9:30', title: 'Registro y café', isSpecial: true },
    { time: '10:00', title: 'TBD Talk' },
    { time: '10:00', title: 'Charla TBD' },
    { time: '11:00', title: 'Charla TBD' },
    { time: '12:00', title: 'Charla TBD' },
    { time: '13:00', title: 'Charla TBD' },
    { time: '14:00', title: 'Comida', isSpecial: true },
    { time: '15:30', title: 'Charla TBD' },
    { time: '16:30', title: 'Charla TBD' },
    { time: '17:30', title: 'Charla TBD' },
    { time: '18:30', title: 'Charla TBD' },
    { time: '19:30', title: 'Cierre', isSpecial: true },
];

export default schedule;