import axios from "axios"

export function getPosts(type: string, params: string, callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/posts" + `?w=${type}${params !== undefined ? "&" + params : ""}`,
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}

export async function like(id: string) {
    axios({
        method: "POST",
        url: "/api/@me/v1/posts/like",
        data: { id },
    })
        // .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}

export async function save(id: string) {
    axios({
        method: "POST",
        url: "/api/@me/v1/posts/save",
        data: { id },
    })
        // .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
