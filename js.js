document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    let position = 0;
    let goingUp = true;
    const amplitude = 70; // Höhe des Sprungs in Pixeln
    const speed = 5; // Geschwindigkeit der Animation

    function animate() {
        if (goingUp) {
            position += speed;
            if (position >= amplitude) {
                goingUp = false;
            }
        } else {
            position -= speed;
            if (position <= 0) {
                goingUp = true;
            }
        }
        
        img.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
