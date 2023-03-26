import axios from "axios"

export function loadProfile(username: string, callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/v1/profile?username=" + username,
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}

export function follow(username: string, callback?: any) {
    axios({
        method: "POST",
        url: "/api/@me/v1/profile/follow",
        data: { username },
    })
        .then((data) => callback(data))
        .catch((error: any) => {
            const errMessage = error.toJSON()
            console.log(errMessage)
        })
}
