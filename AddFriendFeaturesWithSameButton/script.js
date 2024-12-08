var istatus = document.querySelector("h5");
var add = document.querySelector("#add");
var like = document.querySelector("#like2");
var flag = 0;
add.addEventListener("click", function () {
  if (flag == 0) {
    istatus.innerHTML = "Friends";
    add.innerHTML = "Remove friend";
    istatus.style.color = "green";
    flag = 1;
  } else {
    istatus.innerHTML = "Strengers";
    add.innerHTML = "Add friend";
    istatus.style.color = "red";
    flag = 0;
  }
});
like.addEventListener("click", function () {
  var count = 0;
  if (count == 0) {
    like.style.color = "red";
    count = 1;
  } else {
    like.style.color = "red";
    count = 0;
  }
});

var container = document.querySelector("#img");
var love = document.querySelector("#like1");
container.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = "0.8";
  setTimeout(function () {
    love.style.opacity = "0";
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
    love.remove();
  }, 2000);
});
