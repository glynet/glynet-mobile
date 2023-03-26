import axios from "axios"

export function getLoops(audio_id: string, callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/v1/posts/loops?audio_id=" + audio_id,
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
