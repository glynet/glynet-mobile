export const sliceText = (text: string, limit: number = 16, spliceToLimit: boolean = false) => {
    const splitText = text.split(" ")
    text = text.length > limit ? text.substring(0, limit) : text
    if (spliceToLimit) {
        if (splitText.find((r) => r.length <= limit)) {
            let newText: string = ""
            for (const xd of splitText) {
                if ((newText + " " + xd).length < limit) {
                    newText += splitText[0] !== xd ? " " + xd : xd
                }
            }
            text = newText
            if (text === "") text = splitText.filter((r) => r.length <= limit)[0]
        } else {
            text = text.length >= limit ? text.slice(0, limit) + "..." : text
        }
    } else {
        text = text.length >= limit ? text.slice(0, limit) + "..." : text
    }
    return text
}
