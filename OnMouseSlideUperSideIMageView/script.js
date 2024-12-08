const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

const images = [
  "./1.png",
  "./2.png",
  "./3.png",
  "./4.png",
  "./5.png",
  "./6.png",
  "./7.png",
  "./8.png",
  "./9.png",
  "./10.png",
  "./11.png",
  "./12.png",
  "./13.png",
  "./14.png",
  "./15.png",
  "./16.png",
  "./17.png",
  "./18.png",
  "./19.png",
  "./20.png",
];
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    const randomIndex = Math.floor(Math.random() * images.length);
    var img = document.createElement("img");
    img.setAttribute("src", images[randomIndex]);
    div.appendChild(img);

    document.body.appendChild(div);
    gsap.fromTo(
      img,
      {
        scale: 0,
        rotation: 45,
        y: "100%",
      },
      {
        scale: 1,
        rotation: 0,
        y: "0%",
        ease: "elastic.out(1, 0.5)",
        duration: 0.8,
      }
    );

    gsap.to(img, {
      y: "100%",
      ease: "power3.in",
      delay: 0.8,
      duration: 0.8,
    });
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 80)
);
