export const createPost = (postContent) => {
    return fetch("http://localhost:8000/posts", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"content": postContent})
    })
        .then(response => response.json())
}

export const createComment = (commentObject) => {
    return fetch("http://localhost:8000/comments", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentObject)
    })
        .then(response => response.json())
}

export const getPost = (postId) => {
    return fetch(`http://localhost:8000/posts?post=${postId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}`, {
        method: "DELETE",
        headers: {"Authorization": `Token ${localStorage.getItem("palantiri_token")}`}
    })
}