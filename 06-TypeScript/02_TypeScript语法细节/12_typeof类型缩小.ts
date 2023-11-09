function print(message: string | string[] | null) {
    if (typeof message === 'string') {
        console.log('string', message)
    }
    if (typeof message === 'object') {
        for (const s of message) { // TS
            console.log(s);
        }
    }
}

print(null)

export {}