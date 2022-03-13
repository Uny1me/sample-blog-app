const useablePostId = localStorage.getItem("postId");

// console.log(useablePostId);

axios({
  method: "get",
  url: `https://jsonplaceholder.typicode.com/posts/${useablePostId}`,
}).then((res) => {
  //   console.log(res);
  document.getElementById("main-post-header").textContent =
    res.data.title || "Loading..";
  document.getElementById("main-post-body").textContent =
    res.data.body || "Loading...";

  // Fetch the comments
  axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/${useablePostId}/comments`,
  }).then((res) => {
    const comments = res.data;
    comments.forEach((comment) => {
      //   console.log(comment);
      // Email and comment
      var comMail = document.createElement("span");
      comMail.textContent = `posted By ${comment.email}`;
      comMail.classList.add("fst-italic");

      //   Comment
      var userCom = document.createElement("p");
      userCom.textContent = `${comment.body}`;

      const commentList = document.createElement("li");
      //   commentList.appendChild(userCom);
      commentList.append(userCom, comMail);
      document.getElementById("user-comments").appendChild(commentList);
    });
  });
});
