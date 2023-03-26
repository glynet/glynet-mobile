import axios from "axios"

export function getComments(post: string, reply_id: string, is_reply: boolean, page: number, callback?: any) {
    const url = `/api/@me/comments?post=${post}${is_reply ? "&reply=" + reply_id : ""}`
    console.log(url)

    axios
        .get(url)
        .then((data) => callback(data))
        .catch((error) => console.log(error))
}
