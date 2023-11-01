import dayjs from "dayjs";

dayjs.locale('zh-cn')

export function currentMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}

export function nextMonthDay(date) {
    return dayjs(date).add(1, 'day').format('MM月DD日')
}

export function formatMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}

export function formatDiffDay(startDate, endDate) {
    return dayjs(endDate).diff(dayjs(startDate), 'day')
}
