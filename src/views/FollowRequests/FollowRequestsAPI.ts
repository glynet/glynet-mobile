import axios from "axios"

export function getFollowRequests(callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/v1/client/follow_requests",
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}

export function updateUser(user: string, accept: boolean, callback?: any) {
    axios({
        method: "POST",
        url: "/api/@me/client/follow_requests/" + (accept ? "accept" : "decline"),
        data: { user_id: user },
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
