const app = document.getElementById("app");

const apiBaseUrl = "https://jsonplaceholder.typicode.com/";
const postsUrl = `${apiBaseUrl}posts`;
const todosUrl = `${apiBaseUrl}todos`;

async function getPosts() {
    const postsResponse = await fetch(postsUrl);
    return postsResponse.json();
}

async function renderPosts() {
    const posts = await getPosts(); 
    app.innerHTML = posts.map(p => {
        return `<div class="post">${p.title}</div>`
    }).join("");
}


renderPosts();