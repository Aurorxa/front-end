import dayjs from "dayjs";

export function currentMonthDay() {
    return dayjs().format('MM月DD日')
}

export function nextMonthDay() {
    return dayjs().add(1, 'day').format('MM月DD日')
}

export function formatMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}

export function formatDiffDay(startDate, endDate) {
    const days = dayjs(endDate).diff(dayjs(startDate), 'days')
    const nights = Math.floor(days / 2);
    return `${days}天${nights}晚`
}
