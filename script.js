let splashButton = document.querySelector("#splashButton");

splashButton.addEventListener('click', e => location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");

let turtles = document.querySelectorAll(".info div div img");
let info = document.querySelector(".info");

// for (let turtle of turtles) {
//     turtle.addEventListener("click", e => {
//         let i = 0;
//         setInterval(function () {
//             if (i >= 360) {
//                 return;
//             }
//             turtle.style.transform = "rotate(" + i++ + "deg)"
//         }, 1)
//     })
// }


for (let turtle of turtles) {
    // turtle.style.transform = "translateY(" + (Math.random() * 10) + "in)";

    turtle.addEventListener('click', e => {
        info.removeEventListener('click', didNotClick);
        alert("you clicked the turtle!");
    })

    let evenOrOdd = 1;
    let i = 0;
    setInterval(function () {
        info.addEventListener('click', didNotClick);
        // if (i >= 3) { i = -3 }
        // // turtle.style.transform = "translateY(" + (i += 0.1) + "in)";
        // turtle.style.transform = "translateY(" + (i += (Math.random() * Math.random() / 6)) + "in)";

        if (evenOrOdd % 2 == 0) {
            if (i >= 3) {
                evenOrOdd++;
            }
            turtle.style.transform = "translateY(" + (i += (Math.random() * Math.random() / 5)) + "in)";
        }
        else if (evenOrOdd % 2 == 1) {

            if (i <= -3) { evenOrOdd++ } {
                turtle.style.transform = "translateY(" + (i -= (Math.random() * Math.random() / 5)) + "in)";

            }

        }

    }, 5)
}


// console.log(turtles[0].style);

function didNotClick(e) {
    alert("You did not click the turtle.");
}