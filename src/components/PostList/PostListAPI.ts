import axios from "axios"

export function getPosts(type: string, page: number, params: string, callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/v1/posts" + `?collect=${type}${params !== undefined ? "&" + params : ""}` + `&skip=${page}&loop_only=0`,
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
