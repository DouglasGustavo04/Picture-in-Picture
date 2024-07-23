const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// Prompt to select a media stream, pass to video element, then play


async function selectMediaStream (){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata= () => {
            videoElement.play();
        }
    } catch (error){
        //catch error here
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
 //Disable the button
 button.ariaDisabled = true;
 //Start Picture in Picture
 await videoElement.requestPictureInPicture();
 //Reset Button
 button.disabled= false;
});

//you always want to have the function being declared before you're calling it, thats why this is on the bottom

//onload
selectMediaStream();
