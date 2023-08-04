import axios from "axios" // keske port acsaydın

type CreateComment = {
    post_id: string;
    content: string;
    reply_id: string|null;
    is_gif: boolean;
}

export function getComments(post: string, reply_id: string, is_reply: boolean, page: number, callback?: any) {
    const url = `/api/@me/v1/comments?post=${post}${is_reply ? "&reply=" + reply_id : ""}`
    console.log(url)

    axios
        .get(url)
        .then((data) => callback(data))
        .catch((error) => console.log(error))
}

export function createComment(data: CreateComment, callback?: any) {
    axios.put("/api/@me/v1/comments/create", {
        "post_id": data.post_id,
        "content": data.content,
        "reply_id": data.reply_id,
        "is_gif": data.is_gif
    })
    .then((res) => callback(res))
    .catch((error) => console.log(error))
}

export function likeComment(id: string, callback?: any) {
    axios.post("/api/@me/v1/comments/like", { id })
    .then((res) => callback(res))
    .catch((error) => console.log(error))
}
