console.log("working");
const loading = document.getElementById("loading"),
  nav = document.getElementById("nav"),
  foot = document.getElementById("foot"),
  indexContent = document.getElementById("indexContent");

setTimeout(() => {
  loading.style.animation = "fade 0.5s linear";
  setTimeout(() => {
    loading.style.display = "none";
    foot.style.display = "block";
    nav.style.display = "block";
    indexContent.style.display = "block";
  }, 500);
}, 2000);
