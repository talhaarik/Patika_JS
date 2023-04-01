const closebtns = document.getElementsByClassName("close");
for (let i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}

const x = `<span class="close">&times;</span>`;
const inputDOM = document.querySelector("#task");
const ulDOM = document.querySelector("#list");

function newElement() {
  if (inputDOM.value.length > 0) {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = `${inputDOM.value} ${x}`;
    ulDOM.appendChild(liDOM);
    liDOM.addEventListener("click", () => liDOM.classList.toggle("checked"));
    inputDOM.value = "";

    $("li").hover(
      function () {
        $(this).find("span").click(() => this.parentElement.style.display = "none");
      }
    );

    $(".success").toast("show");
  } else {
    $(".error").toast("show");
  }
}

const liAll = document.querySelectorAll("li");
liAll.forEach(liDOM => liDOM.addEventListener("click", () => liDOM.classList.toggle("checked"))); 
