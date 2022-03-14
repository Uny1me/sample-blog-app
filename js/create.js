// We Send a post to our REST API

window.addEventListener("load", () => {
  const form = document
    .getElementById("create-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      // Getting the form data
      const ptitle = document.getElementById("post-title");
      const inputTitle = ptitle.value;

      const pbody = document.getElementById("post-body");
      const inputBody = pbody.value;

      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: inputTitle,
          body: inputBody,
        })
        .then(function (response) {
          console.log(response.data);
          var myModal = document.getElementById("modal");
          myModal.classList.add("d-block");
          //   Modal text
          const modalText = `Your post with title: ${response.data.title} has been received!`;
          document.querySelector(".modal-body p").textContent = modalText;

          var closeModal =  document.getElementsByClassName('close-modal')
          for (let i = 0; i < closeModal.length; i++) {
              const clM = closeModal[i];
              clM.addEventListener('click', ()=> {
                  myModal.classList.remove("d-block");
                })
            }
            var toHome =  document.getElementById('to-home')
            toHome.addEventListener('click', ()=> {
                window.location = '/index.html'
            })

        })
        .catch(function (error) {
          console.log(error);
        });

    });
});
