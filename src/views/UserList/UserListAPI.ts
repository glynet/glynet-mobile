import axios from "axios"

export async function getUserList(url: string, callback?: any) {
    axios({
        method: "GET",
        url: url,
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
