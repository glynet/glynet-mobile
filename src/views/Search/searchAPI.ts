import axios from "axios";

export function getSuggestions(input: string, callback?: any) {
    axios({
        method: "GET",
        url: "/api/@me/search?value=" + input,
    }).then((data) => callback(data)).catch((error: any) => {
        const errMessage = error.toJSON();
        console.log(errMessage);
    });
}

