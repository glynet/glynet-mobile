import axios from "axios";

export async function like(id: string, callback?: any) {
    axios({
        method: "POST",
        url: "/api/@me/posts/like",
        data: { id }
    }).then((data) => callback(data)).catch((error: any) => {
        const errMessage = error.toJSON();
        console.log(errMessage);
    });
}

export async function save(id: string, callback?: any) {
    axios({
        method: "POST",
        url: "/api/@me/posts/save",
        data: { id }
    }).then((data) => callback(data)).catch((error: any) => {
        const errMessage = error.toJSON();
        console.log(errMessage);
    });
}