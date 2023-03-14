import axios from "axios";

export function getNotifications(callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/notifications"
    }).then((data) => callback(data)).catch((error: any) => {
        const errMessage = error.toJSON();
        console.log(errMessage);
    });
}