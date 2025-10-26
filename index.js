// Write your code here!

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    }
    catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function displayPosts(posts) {  
    const postsContainer = document.getElementById('post-list');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('li');
        const titleElement = document.createElement('h1');
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postsContainer.appendChild(postElement);
    });
}

fetchAndDisplayPosts();