// play sound
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0; // audio will be rewind
    audio.play();
    key.classList.add("playing");  // add class playing to the class key - toggle
}


// transition remove
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


// check activity on the keyboard

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));

window.addEventListener('keydown', playSound);


// arrray = [1,2,3,4]
// //            i
// arrray.forEach(i => console.log(i))
// 1
// 2
// 3
// 4