function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case'string':
            console.log(message.length)
            break
        case 'number':
            console.log(message)
            break
        case 'boolean':
            console.log(Number(message))
            break
        default:
            const check: never = message
            console.log('@@@', check)
            break
    }
}

handleMessage("abc")
handleMessage(123)
handleMessage(true)

export {}