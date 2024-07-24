const videoElement = document.getElementById("video");
const btn = document.getElementById("video");

const selectMediatream = async () => {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play;
    };
  } catch (error) {
    console.log("error playing video");
  }
};
btn.addEventListener("click", async () => {
  //disble button
  btn.disabled = true;
  //start picture in picture mode
  await videoElement.requestPictureInPicture();
  //reset button
  btn.disabled = false;
});

//onLoad
selectMediatream();
