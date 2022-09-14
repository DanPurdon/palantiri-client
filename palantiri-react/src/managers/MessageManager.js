// export const createPost = (postContent) => {
//     return fetch("http://localhost:8000/posts", { 
//         method: "POST",
//         headers:{
//             "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({"content": postContent})
//     })
//         .then(response => response.json())
// }

export const getMessage = (messageId) => {
    return fetch(`http://localhost:8000/messages?message=${messageId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}