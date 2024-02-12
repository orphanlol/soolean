const autoAnswer = document.createElement("div");

autoAnswer.style = "position:fixed;top:50px;left:50px;background-image: url('https://raw.githubusercontent.com/Orphanlol/Veue/main/img/weird.jpg');background-size:cover;background-color:rgba(0, 0, 0, 0.8);border-radius:10px;color:#fff;font-family:sans-serif;padding:20px;border:2px solid black;cursor:grab;height:320px;width:200px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 105, 180, 0.7);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:space-between;user-select:none;";

autoAnswer.innerHTML = "<div style='display:flex;justify-content:space-between;width:100%;align-items:center;margin-bottom:10px;'>     <a href='https://discord.gg/BWNZpSBJJ8' target='_blank' style='margin-right:10px;'>       <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB8klEQVQ4Ea2UzUuUURSHHS3UqaFgipJqRJgWUmJBtMlFEBRBIhbhR7iQaCG4kP6Q+gMECXLRok3Qqk3MYtRFQZlIQSBMKAQFUfkV1vQ8L3OHyyDIyPzg4d573nPPve85531Tww9+NjVSzY0MZqwDuwQ8jK0LuuE9fIIUKMer0A7LsAp/oKo4YBvWuzAKFyALBXgDGfgHG3AHTsEaFGG6MpYZm1JRDgdZz8BRH9ShRXw95LN7Qg6PMZ+CeoMZ4zzch+RtQ8DrGC7DfmSMIci72UUaNJjD/SrHxpuQMqAVvQSxvrCYhQX4Gz1YZ/4SXsCvyN7C/AakDdgDxyFIx4cwDlb8HSir+BRGQLvVTSrLqGyzDgOeg4MQ9J3JW9iBEthvyraxTX6D7TMH+gRlmeQMeCZYKqMVNwVWrRM8UOnbBza+eb8CSWUZVSuc0KBDLNePYADy0AvKr2QMbGrzeg20BXlgxoBxHnzo2k33XNTIm92q2ExBrcpGXQJzEuQnZfLn4StsgbkS/UrwCp7DJgTpu+INfT2dJsGKn4SzMAHe4jT4Bfma30Dfi/AY7F2L9BqMUzSgbfIEPLUfboNV/gjb8AFq5c30KcCzypj8WOOfA/YkyYcYvVmcBp/FshhHwMAeWpU3jGVBfIW9pN+P3ZwsSkP1H2BvZtLmW38/AAAAAElFTkSuQmCC' alt='Logo' style='width: 30px;height: 30px;margin-right: 5px;'>     </a>     <span id='close-button' style='cursor:pointer;margin-left:auto;font-size:20px;font-weight:bold;color:#fff;'>X</span>   </div>   <h2 style='margin:0 0 10px;font-size:18px;font-weight:bold;text-align:center;color:#fff;'>hack launcher (ig)</h2>   <hr style='border:none;border-top:1px solid #fff;width:100%;margin:0;'>   <div style='display:flex;flex-direction:column;justify-content:center;height:100%;width:100%;margin:10px 0;'>     <span id='devhaxxFree' style='background-color:transparent;border:none;border-radius:3px;padding:8px;color:#fff;font-size:14px;font-weight:bold;transition: transform 0.2s ease-in-out;width:80%;text-align:center;min-width:100px;margin:5px 0;margin-left:10px;cursor:pointer;'>DevHaxx Free</span>     <span id='minfarm' style='background-color:transparent;border:none;border-radius:3px;padding:8px;color:#fff;font-size:14px;font-weight:bold;transition: transform 0.2s ease-in-out;width:80%;text-align:center;min-width:100px;margin:5px 0;margin-left:10px;cursor:pointer;'>Farm Minutes</span>     <span id='wangMenu' style='background-color:transparent;border:none;border-radius:3px;padding:8px;color:#fff;font-size:14px;font-weight:bold;transition: transform 0.2s ease-in-out;width:80%;text-align:center;min-width:100px;margin:5px 0;margin-left:10px;cursor:pointer;'>Dupe Lesson</span>     <span id='freeGames' style='background-color:transparent;border:none;border-radius:3px;padding:8px;color:#fff;font-size:14px;font-weight:bold;transition: transform 0.2s ease-in-out;width:80%;text-align:center;min-width:100px;margin:5px 0;margin-left:10px;cursor:pointer;'>Free Games</span>     <span id='galaxify' style='background-color:transparent;border:none;border-radius:3px;padding:8px;color:#fff;font-size:14px;font-weight:bold;transition: transform 0.2s ease-in-out;width:80%;text-align:center;min-width:100px;margin:5px 0;margin-left:10px;cursor:pointer;'>Auto Answer</span>   </div>";

document.body.appendChild(autoAnswer);
let isMoving = false;
let offX = 0;
let offY = 0;
const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => autoAnswer.remove());
autoAnswer.addEventListener("mousedown", function (e) {
  isMoving = true;
  offX = e.offsetX;
  offY = e.offsetY;
  autoAnswer.style.cursor = "grabbing";
});

document.addEventListener("mouseup", function () {
  isMoving = false;
  autoAnswer.style.cursor = "grab";
});

document.addEventListener("mousemove", function (e) {
  if(isMoving) {
    autoAnswer.style.left = e.clientX - offX + 'px';
    autoAnswer.style.top = e.clientY - offY + 'px';
  }
});
const lessonSkipper = document.getElementById("devhaxxFree");
const clicker = document.getElementById("minfarm");
const wangMenu = document.getElementById("wangMenu");
const freeGames = document.getElementById("freeGames");
const galaxify = document.getElementById("galaxify");

lessonSkipper.addEventListener("click", () => {
  alert("go lesson skipper my ballsack");
});

clicker.addEventListener("click", () => {
  const style = document.createElement("style");
  style.innerHTML = "*{cursor: crosshair !important;}";
  document.body.appendChild(style);
  function toggleClicker(e) {
    if (!e.isTrusted) return;
    if(e.target.classList.contains('auto-clicker-target')) {
      e.target.classList.remove('auto-clicker-target')
    } else {
      e.target.classList.add('auto-clicker-target')
    }
    document.body.removeChild(style);
    document.body.removeEventListener('click', toggleClicker);
    e.preventDefault()
    click(e.target);
  }

  function click(element) {
    if(element.classList.contains("auto-clicker-target")) {
      element.click();
      setTimeout(() => {
        click(element);
      }, 1);
    }
  }
  document.body.addEventListener("click", toggleClicker, 0);
  alert("this is a autoclicker i guess");
  console.log("lenn106 made this");
});

wangMenu.addEventListener("click", () => {
  alert("wang on top blud");
  console.log("dumbass = true");
});

freeGames.addEventListener("click", () => {
  alert("allow the following window to open, it opens a Google Slides listing the current i-Ready games we have the link to");
  window.open("https://docs.google.com/presentation/d/1UXzBySvLw_BKF5FfkXXXehuNjtYbNgi7N-EPFjwFPaA/edit");
  console.log("orphanlol was here");
});

galaxify.addEventListener("click", () => {
  alert("Auto Answer does not work.");
  alert("loading Galaxify (Nullify by galaxy)");
  fetch("https://raw.githubusercontent.com/galaxqy/real-iready/main/real.js")
    .then(r => r.text())
    .then(t => eval(t));
});
