export const addSpace = (value: string, everyN: number): string => {
    return value.replace(/(\d{4})/g, "$1 ")
}

export const padString = (value: string, desiredLength: number, padWith: string = ""): string => {
    if (value.length >= desiredLength) {
        return value;
    }

    return value + padWith.repeat(desiredLength - value.length)
}