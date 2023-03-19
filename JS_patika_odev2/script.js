var closebtns = document.getElementsByClassName("close");
for (var i = 0; i < closebtns.length; i++) {
   closebtns[i].addEventListener("click", function () {
      this.parentElement.style.display = 'none';
   });
}

let x = `<span class="close">&times;</span>`;
let inputDOM = document.querySelector('#task');
let ulDOM = document.querySelector('#list');

function newElement() {
   if (inputDOM.value.length > 0) {
      let liDOM = document.createElement('li');
      liDOM.innerHTML = `${inputDOM.value} ${x}`;
      ulDOM.appendChild(liDOM);
      liDOM.addEventListener("click", blue);
      inputDOM.value = "";

      $('li').hover(function () {
         $(this).find('span').click(function () {
            this.parentElement.style.display = 'none';
         })
      });

      function blue() {
         liDOM.className == "checked" ? liDOM.classList.remove("checked") : liDOM.classList.add("checked");
      }

      $(".success").toast('show');
   } else {
      $(".error").toast('show');
   }
}

let liAll = document.querySelectorAll('li');
for (let i = 0; i < liAll.length; i++) {
   liAll[i].addEventListener("click", function () {
      liAll[i].className == "checked" ? liAll[i].classList.remove("checked") : liAll[i].classList.add("checked");
   })
}
