import dayjs from "dayjs";

export function currentMonthDay() {
    return dayjs().format('MM月DD日')
}

export function nextMonthDay() {
    return dayjs().add(1, 'day').format('MM月DD日')
}