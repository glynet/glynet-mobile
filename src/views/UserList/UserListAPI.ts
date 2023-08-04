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

export function acceptUser(user: string, accept: boolean, callback?: any) {
    axios({
        method: "POST",
        url: "/api/@me/v1/client/update_follow_request",
        data: { user_id: user, accept },
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
