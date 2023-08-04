export const sliceText = (text: string, limit = 16, spliceToLimit = false) => {
    const splitText = text.split(" ")
    text = text.length > limit ? text.substring(0, limit) : text
    if (spliceToLimit) {
        if (splitText.find((r) => r.length <= limit)) {
            let newText = ""
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
