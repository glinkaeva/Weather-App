export function getDayWeek() {
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let date = new Date();
    let n = date.getDay();
    return days[n];
}

export function getFullDate() {
    let date = new Date();
    let dateOutput = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
    return dateOutput;
}