window.onload = function () {
  document.getElementsByClassName("blocker")[0].style.display = "none";
  setTimeout(function () {
    document.getElementsByClassName("loader")[0].style.display = "block";
  }, 5000);
  setTimeout(function () {
    document.getElementsByClassName("blocker")[0].style.display = "block";
  }, 14000);
  setTimeout(function () {
    document.getElementsByClassName("blocker")[0].style.display = "none";
    setTimeout(function () {
      var bootsound = new Audio(
        "https://github.com/XiaomiSimulator/SimulatorAssets/raw/main/boot/audio/bootaudio.mp3"
      );
      bootsound.onended = function () {
        document.getElementsByClassName("miui_overlay")[0].style.animation =
          "move 4s linear 1s infinite";
        document.getElementsByClassName("miui_overlay")[0].style.opacity =
          "0.85";
      };
      bootsound.play();
    }, 2000);
    document.getElementsByClassName("miui_div")[0].style.display = "grid";
    document.getElementsByClassName("xiaomi_div")[0].style.display = "none";
    document.getElementsByClassName("loader")[0].style.display = "none";
    setTimeout(function () {
      window.location.replace(
        "https://XiaomiSimulator.github.io/sys/lockscreen.html"
      );
    }, 18000);
  }, 16000);
};
