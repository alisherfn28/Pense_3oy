window.addEventListener("load", function () {
  document.getElementById("loader-container").style.display = "flex";
  let loadingTime = 0;
  const interval = setInterval(() => {
    loadingTime += 1;
    if (loadingTime >= 3) {
      clearInterval(interval);
      document.getElementById("loader-container").style.display = "none";

      document.getElementById("index.html").style.display = "flex";
    }
  }, 1000);
});
