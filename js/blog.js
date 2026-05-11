const postForm = document.getElementById("postForm");

const postsContainer = document.getElementById("posts-container");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

/* =========================
   CREAR PUBLICACION
========================= */

if(postForm){

    postForm.addEventListener("submit", function(e){

        e.preventDefault();

        const title = document.getElementById("postTitle").value;

        const content = document.getElementById("postContent").value;

        const newPost = {
            id: Date.now(),
            title,
            content,
            date: new Date().toLocaleDateString()
        };

        posts.push(newPost);

        localStorage.setItem("posts", JSON.stringify(posts));

        postForm.reset();

        mostrarPosts();

    });

}

/* =========================
   MOSTRAR POSTS
========================= */

function mostrarPosts(){

    if(!postsContainer) return;

    postsContainer.innerHTML = "";

    const reversedPosts = [...posts].reverse();

    reversedPosts.forEach(post => {

        postsContainer.innerHTML += `
        
            <div class="post-card">

                <h3>${post.title}</h3>

                <p>${post.content}</p>

                <small>${post.date}</small>

            </div>

        `;

    });

}

mostrarPosts();