
export const getMessage = (messageId) => {
    return fetch(`http://localhost:8000/messages?message=${messageId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const createMessage = (message) => {
    return fetch("http://localhost:8000/messages", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
        .then(response => response.json())
}

export const deleteMessage = (messageId) => {
    return fetch(`http://localhost:8000/messages/${messageId}`, {
        method: "DELETE",
        headers: {"Authorization": `Token ${localStorage.getItem("palantiri_token")}`}
    })
}