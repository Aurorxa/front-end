function print(message: string | string[] | null) {
    if (typeof message === 'string') {
        console.log('string', message)
    }
    if (typeof message === 'object') {
        for (const s of message) { // TS 会检测出可能为 null
            console.log(s);
        }
    }
}

print(null)


export {}