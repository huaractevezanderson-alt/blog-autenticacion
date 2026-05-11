const postForm = document.getElementById("postForm");

const postsContainer = document.getElementById("posts-container");

const postTitle = document.getElementById("postTitle");

const postContent = document.getElementById("postContent");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

let editPostId = null;

/* =========================
   CREAR Y EDITAR
========================= */

if(postForm){

    postForm.addEventListener("submit", function(e){

        e.preventDefault();

        const title = postTitle.value;

        const content = postContent.value;

        if(editPostId){

            posts = posts.map(post => {

                if(post.id === editPostId){

                    return {
                        ...post,
                        title,
                        content
                    };

                }

                return post;

            });

            editPostId = null;

        }else{

            const newPost = {
                id: Date.now(),
                title,
                content,
                date: new Date().toLocaleDateString()
            };

            posts.push(newPost);

        }

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

                <div class="post-buttons">

                    <button onclick="editarPost(${post.id})">
                        Editar
                    </button>

                    <button onclick="eliminarPost(${post.id})">
                        Eliminar
                    </button>

                </div>

            </div>

        `;

    });

}

/* =========================
   ELIMINAR
========================= */

function eliminarPost(id){

    const confirmar = confirm("¿Deseas eliminar esta publicación?");

    if(!confirmar) return;

    posts = posts.filter(post => post.id !== id);

    localStorage.setItem("posts", JSON.stringify(posts));

    mostrarPosts();

}

/* =========================
   EDITAR
========================= */

function editarPost(id){

    const post = posts.find(post => post.id === id);

    if(!post) return;

    postTitle.value = post.title;

    postContent.value = post.content;

    editPostId = id;

}

mostrarPosts();