import axios from "axios"

export async function getSuggestions(input: string, callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/v1/search?value=" + input,
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
