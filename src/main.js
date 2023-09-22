import { posts } from './posts'

const postContentEl = document.querySelector(".post-content")
const giveLikeEl = document.querySelector("#give-like")
renderPosts()
console.log(giveLikeEl)
// giveLikeEl.addEventListener("dblclick", function() {
//   console.log("click")
// } )

function image() {
  console.log("click")
}

function renderPosts () {
  for (let i = 0; i < posts.length; i++){
    let profile = posts[i]
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
          <img class="post-image give-like" src=${profile.post} alt="post image" ondblclick="image()">
        </div>
        <div class="post-footer">
          <div class="post-icons">
            <img class="icons give-like" src="img/icon-heart.png" alt="heart icon">
            <img class="icons" src="img/icon-dm.png" alt="dm icon">
            <img class="icons" src="img/icon-comment.png" alt="comment icon">
          </div>
          <span class="text-callout comment">${profile.likes} likes</span>
          <p class="comment"><span class="text-callout">${profile.username}</span>${profile.comment}</p>
        </div>
    </div>
  `
  }
}

