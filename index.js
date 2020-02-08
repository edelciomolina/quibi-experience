let lastView = null;
const mutedVertical = false;
const mutedHorizontal = true;
const playerVertical = videojs("vertical-video");
const playerHorizontal = videojs("horizontal-video");
const divVertical = $("#vertical-div");
const divHorizontal = $("#horizontal-div");

const syncTime = () => {
  const difHorizontal = 22;
  const difVertical = 0;
  const time = playerHorizontal.currentTime();
  playerHorizontal.currentTime(time + difHorizontal);
  playerVertical.currentTime(time + difVertical);
  console.log(playerHorizontal.currentTime(), playerVertical.currentTime())
};

const checkView = () => {
  if (screen.orientation.type === "portrait-primary") showVertical();
  if (screen.orientation.type === "landscape-primary") showHorizontal();
};

const start = () => {
  syncTime();
  checkView();
  playerHorizontal.play();
  playerHorizontal.muted(mutedHorizontal);
  playerVertical.play();
  playerVertical.muted(mutedVertical);
  window.addEventListener("orientationchange", checkView, false);
};
const showVertical = () => {
  lastView = "vertical";
  divVertical.show();
  divHorizontal.hide();
};

const showHorizontal = () => {
  lastView = "horizontal";
  divVertical.hide();
  divHorizontal.show();
};

const playVideos = () => {
  playerVertical.ready(() => {
    playerVertical.fluid("true");
    playerVertical.pause(true);
  });
  playerHorizontal.ready(() => {
    playerHorizontal.fluid("true");
    playerHorizontal.pause(true);
  });

  setTimeout(start, 3000);
};

playVideos();
