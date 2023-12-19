import { posts } from "./posts";

const postContentEl = document.querySelector(".post-content");

// aguardar a criação do DOM para pegar o conjunto de elementos com a classe "give-like"
document.addEventListener("DOMContentLoaded", (event) => {
  const giveLikeEl = document.querySelectorAll(".give-like");
  giveLikeEl.forEach((giveLikeEl) => {
    giveLikeEl.addEventListener("dblclick", (giveLikeEl) => {
      // pega o atributo alt do elemento e retorna a última palavra contendo o usuário.
      const words = giveLikeEl.target.alt.split(" ").pop();
      // console.log(words);
      posts.forEach((post) => {
        if (post.username === words) {
          post.likes += 1;
          const likes = document.querySelectorAll(".likes");
          likes.forEach((element) => {
            if (element.id === words) {
              element.innerHTML = `${post.likes} likes`;
            }
          });
        }
      });
    });
  });
});

renderPosts();

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    let profile = posts[i];
    postContentEl.innerHTML += `
    <div class="container">
        <div class="post-header">
          <img class="icon-avatar" src=${profile.avatar} alt="avatar">
          <div class="user-info">      
            <span class="text-callout">${profile.name}</span>
            <span class="location">${profile.location}</span>
          </div>
        </div>
        <div class="post-image">
          <img class="post-image give-like" src=${profile.post} alt="post image of ${profile.username}">
        </div>
        <div class="post-footer">
          <div class="post-icons">
            <img class="icons give-like" src="img/icon-heart.png" alt="heart icon of ${profile.username}">
            <img class="icons" src="img/icon-dm.png" alt="dm icon">
            <img class="icons" src="img/icon-comment.png" alt="comment icon">
          </div>
          <span id="${profile.username}" class="text-callout comment likes">${profile.likes} likes</span>
          <p class="comment"><span class="text-callout">${profile.username}</span>${profile.comment}</p>
        </div>
    </div>
  `;
  }
}
