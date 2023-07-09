function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    return getFetch(`https://jsonplaceholder.typicode.com/posts`, {userId:userId})
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    });
})

// fecade

function getFetch(url, params = {}){
    const queryString = Object.entries(params).map(param => {     // {userId: 1} => [[userId, 1]]
        return `${param[0]}=${param[1]}`
    }).json('&')
    return fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json"}
    }).then(res => res.json())
}

// use axios

function getFetch(urk, params = {}) {
    return axios({
        url: url,
        method: "GET",
        params: params
    }).then(res => res.data)
}