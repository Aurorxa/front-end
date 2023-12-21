import dayjs from "dayjs";

dayjs.locale('zh-cn')

export function formatMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}

export function formatMonthDaySimple(date) {
    return dayjs(date).format('MM.DD')
}

export function formatDiffDay(startDate, endDate) {
    return dayjs(endDate).diff(dayjs(startDate), 'day')
}
