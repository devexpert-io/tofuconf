export interface ScheduleItem {
    time: string;
    title: string;
    isSpecial?: boolean; // Optional property
}

const schedule: ScheduleItem[] = [
    { time: '10:00', title: 'Apertura', isSpecial: true },
    { time: '10:15', title: 'Charla TBD' },
    { time: '11:00', title: 'Charla TBD' },
    { time: '11:45', title: 'Coffee Break', isSpecial: true },
    { time: '12:15', title: 'Charla TBD' },
    { time: '13:00', title: 'Charla TBD' },
    { time: '14:00', title: 'Comida', isSpecial: true },
    { time: '15:30', title: 'Charla TBD' },
    { time: '16:15', title: 'Charla TBD' },
    { time: '17:00', title: 'Networking', isSpecial: true },
    { time: '17:30', title: 'Charla TBD' },
    { time: '18:15', title: 'Charla TBD' },
    { time: '19:00', title: 'Cierre', isSpecial: true },
];

export default schedule;