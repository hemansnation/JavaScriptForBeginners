window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition // for chrome


const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

let p = document.createElement('p');
let words = document.querySelector('.words');
words.appendChild(p);


recognition.addEventListener('result', e => {

    let transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');
    
    
    // p.textContent = transcript;

    const change = transcript.replace("hello", "hi");
    p.textContent = change;

    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }

    // console.log(transcript);
})

recognition.addEventListener('end', recognition.start);

recognition.start();


// console.log(recognition);