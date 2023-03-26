import axios from "axios"

export function getLoops(type: string, page: number, loop_id: string, callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/v1/posts?collect=" + type + "&loop_only=1&skip=" + page + (loop_id.length !== 0 ? "&loop_id=" + loop_id : ""),
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
