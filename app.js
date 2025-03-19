// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['red' ,'green', 'blue', 'pink', 'grey', 'purple', 'yellow', 'grey', 'pink', 'grey', 'black', ' green', 'brown', 'purple', 'blue', 'yellow', 'green', 'black', 'red', 'pink'];

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    ballonsMap[position] = null;

    render();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        if (color !== null) {
            // Globo activo con color
            return `
                <div 
                  class="balloon active" 
                  style="background-color: ${color};"
                  onclick="popBalloon(${position})"
                ></div>
            `;
        } else {
            // Globo reventado
            return `<div class="balloon popped"></div>`;
        }
    });

    const activeBalloons = ballonsMap.filter(color => color !== null).length;
    document.querySelector("#balloon-count").innerHTML = activeBalloons;
    document.querySelector("#balloon-map").innerHTML = ballons.join("");
  
    // Si ya no hay globos activos, recargamos la página para reiniciar el juego.
    if (activeBalloons === 0) {
      setTimeout(() => {
        window.location.reload();
      }, 500); // Opcional: un pequeño retardo antes de recargar.
    }
  };


// this makes the "render" function trigger when the website starts existing
window.onload = render();