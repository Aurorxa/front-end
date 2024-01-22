function print(message: string | Date) {
    if (message instanceof Date) {
        console.log(message.toLocaleString());
    } else {
        console.log(message.toUpperCase())
    }
}

print(new Date())
print("hi")

export {}