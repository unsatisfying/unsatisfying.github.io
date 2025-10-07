var a_idx = 0;
window.onclick = function (event) {
  var a = new Array(
    "富强", "民主", "文明", "和谐",
    "自由", "平等", "公正", "法治",
    "爱国", "敬业", "诚信", "友善"
  );
  var heart = document.createElement("span");
  heart.className = "text-popup";
  heart.textContent = a[a_idx];
  a_idx = (a_idx + 1) % a.length;
  var x = event.pageX;
  var y = event.pageY;
  heart.style.zIndex = 9999;
  heart.style.top = y - 20 + "px";
  heart.style.left = x + "px";
  heart.style.position = "absolute";
  heart.style.fontWeight = "bold";
  heart.style.color = randomColor();
  document.body.appendChild(heart);
  animate(heart);
};

function animate(el) {
  var i = 0;
  var interval = setInterval(function () {
    el.style.top = parseFloat(el.style.top) - 1 + "px";
    el.style.opacity = (parseInt(el.style.opacity || 100) - 2) / 100;
    i++;
    if (i > 150) {
      clearInterval(interval);
      el.remove();
    }
  }, 16);
}

function randomColor() {
  return (
    "rgb(" +
    ~~(255 * Math.random()) +
    "," +
    ~~(255 * Math.random()) +
    "," +
    ~~(255 * Math.random()) +
    ")"
  );
}
