function fetchPosts() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts?_limit=10",
  })
    .then((result) => {
      const posts = result.data;
      // console.log(posts);

      posts.forEach((post) => {
        // Container
        var postPreview = document.createElement("div");
        postPreview.classList.add("post-preview");

        // Link
        var postLink = document.createElement("a");
        // postLink.href = `post.html/${post.id}`;
        postLink.href = `post.html?postnumber=${post.id}`;
        postLink.addEventListener("click", () => {
          getSinglePost(`${post.id}`);
        });

        // Header
        var postHeader = document.createElement("h2");
        postHeader.classList.add("post-title");
        postHeader.textContent = `${post.title}`;

        // Body
        var postMeta = document.createElement("p");
        postMeta.classList.add("post-meta");
        postMeta.textContent = `${post.body}`;

        // Delete button
        var postDelete = document.createElement("button");
        postDelete.classList.add("btn", "btn-outline-danger");
        postDelete.textContent = `Delete`;
        postDelete.addEventListener("click", () => {
          deletePost(`${post.id}`);
        });

        // Horizontal Line
        var postLine = document.createElement("hr");
        postMeta.classList.add("my-4");

        postLink.appendChild(postHeader);
        postPreview.append(postLine, postLink, postMeta, postDelete);

        document.getElementById("blog").appendChild(postPreview);
      });
    })
    .catch((error) => console.error(error));
}

window.addEventListener("DOMContentLoaded", () => {
  fetchPosts();
});

function getSinglePost(id) {
  //   We use local storage to pull post data in post.js
  localStorage.setItem("postId", id);
}

function deletePost(id) {
  axios({
    method: "delete",
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  })
    .then((res) => fetchPosts())
    .catch((err) => console.log(err));
}
// CRUD

// Usually you output res i.e. response to the console but to get data Object we use res.data;

//   Mapping through for DOM
