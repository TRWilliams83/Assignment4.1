/// Timothy Ryan Williams 

/// function to rotate the meme
function rotateMeme() {
    const meme = document.getElementById('meme');
    /// random 360 spin 
    const newRotate = Math.floor(Math.random() * 360);
    /// pic new spot
    meme.style.transform = `rotate(${newRotate}deg)`;
}

/// starts rotation
function startRotate() {
    /// stop button
    document.getElementById('stop').disabled = false;
    /// start button
    document.getElementById('start').disabled = true;
    /// rotate with 3/4 a second (ish) delay
    window.rotateInterval = setInterval(rotateMeme, 500);
}

/// function to stop rotation
function stopRotate() {
    /// start button
    document.getElementById('start').disabled = false;
    /// stop button
    document.getElementById('stop').disabled = true;
    /// stop rotating 
    clearInterval(window.rotateInterval);
}

/// event starts rotation
document.getElementById('start').onclick = startRotate;
/// event stops rotation
document.getElementById('stop').onclick = stopRotate;