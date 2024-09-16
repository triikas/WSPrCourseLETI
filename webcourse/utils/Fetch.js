export default function postFetch(endpint, bodyObj) {
    return fetch(endpint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(bodyObj),
    }).then(res => {
        return res.json();
    }).then(res => {
        if (res.success) {
            // console.log(res);
            return res;
        }
        throw Error();
    });


}