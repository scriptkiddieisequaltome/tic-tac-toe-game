console.log("I dont know how to do but i will do it?")
let gameover = true;
const audio = new Audio("./sounds/swish.m4a")
const nayaaudio = new Audio("./sounds/aww.mp3")
const moreaudio = new Audio("./sounds/cash.mp3")

let row1 = document.querySelector("#row1").addEventListener('click', run1)
let row2 = document.querySelector("#row2").addEventListener('click', run2)
let row3 = document.querySelector("#row3").addEventListener('click', run3)
let row4 = document.querySelector("#row4").addEventListener('click', run4)
let row5 = document.querySelector("#row5").addEventListener('click', run5)
let row6 = document.querySelector("#row6").addEventListener('click', run6)
let row7 = document.querySelector("#row7").addEventListener('click', run7)
let row8 = document.querySelector("#row8").addEventListener('click', run8)
let row9 = document.querySelector("#row9").addEventListener('click', run9)

let currentplayer = "O";

function run1() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row1 = document.querySelector("#row1")
    if (row1.textContent === "===") {
        document.querySelector("#row1").textContent = currentplayer;
        document.querySelector("#row1").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row1").removeEventListener('click', run1)

    } 
    audio.play()

}

function run2() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row2 = document.querySelector("#row2")
    if (row2.textContent === "===") {
        document.querySelector("#row2").textContent = currentplayer;
        document.querySelector("#row2").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row2").removeEventListener('click', run2)


    }
    audio.play()
}

function run3() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row3 = document.querySelector("#row3")
    if (row3.textContent === "===") {
        document.querySelector("#row3").textContent = currentplayer;
        document.querySelector("#row3").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row3").removeEventListener('click', run3)
    }
    audio.play()
}

function run4() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row4 = document.querySelector("#row4")
    if (row4.textContent === "===") {
        document.querySelector("#row4").textContent = currentplayer;
        document.querySelector("#row4").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row4").removeEventListener('click', run4)

    } 
    audio.play()
}

function run5() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row5 = document.querySelector("#row5")
    if (row5.textContent === "===") {
        document.querySelector("#row5").textContent = currentplayer;
        document.querySelector("#row5").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row5").removeEventListener('click', run5)

    } 
    audio.play()
}

function run6() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row6 = document.querySelector("#row6")
    if (row6.textContent === "===") {
        document.querySelector("#row6").textContent = currentplayer;
        document.querySelector("#row6").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row6").removeEventListener('click', run6)

    }
    audio.play()

}

function run7() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row7 = document.querySelector("#row7")
    if (row7.textContent === "===") {
        document.querySelector("#row7").textContent = currentplayer;
        document.querySelector("#row7").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row7").removeEventListener('click', run7)

    }
    audio.play()
}

function run8() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row8 = document.querySelector("#row8")
    if (row8.textContent === "===") {
        document.querySelector("#row8").textContent = currentplayer;
        document.querySelector("#row8").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row8").removeEventListener('click', run8)

    } 
    audio.play()
}

function run9() {
    if (currentplayer == "O") {
        currentplayer = "X"
    } else if (currentplayer == "X") {
        currentplayer = "O"
    }
    let row9 = document.querySelector("#row9")
    if (row9.textContent === "===") {
        document.querySelector("#row9").textContent = currentplayer;
        document.querySelector("#row9").style = "font-size:80px";
        document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;
        decide_winner()
        document.querySelector("#row9").removeEventListener('click', run9)

    } 
    audio.play()
}

// }
// function second_main(){

//     document.querySelector(".expalination").textContent = currentplayer + " 's turn"
//    if (currentplayer == "O"){
//         currentplayer = "X"
//     }
//     else if (currentplayer == "X"){
//         currentplayer = "O"
//     }
// }
// second_main()
let winner;

function decide_winner(winner) {
    let row1 = document.querySelector("#row1")
    let row2 = document.querySelector("#row2")
    let row3 = document.querySelector("#row3")
    if (row1.textContent === "X" && row2.textContent === "X" && row3.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        // console.log(winner)
        moreaudio.play()
    removelistener(winner)




    }
    if (row1.textContent === "O" && row2.textContent === "O" && row3.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }

    // seocnd row

    let row4 = document.querySelector("#row4")
    let row5 = document.querySelector("#row5")
    let row6 = document.querySelector("#row6")
    if (row4.textContent === "X" && row5.textContent === "X" && row6.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        // console.log(winner)
        moreaudio.play()
    }
    if (row4.textContent === "O" && row5.textContent === "O" && row6.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
    removelistener(winner)
    // console.log(winner)
    }
    let row7 = document.querySelector("#row7")
    let row8 = document.querySelector("#row8")
    let row9 = document.querySelector("#row9")
    if (row7.textContent === "X" && row8.textContent === "X" && row9.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row7.textContent === "O" && row8.textContent === "O" && row9.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }

    // it time for the column

    if (row1.textContent === "X" && row4.textContent === "X" && row7.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        // console.log(winner)
        moreaudio.play()
    removelistener(winner)

    }
    if (row1.textContent === "O" && row4.textContent === "O" && row7.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row2.textContent === "X" && row5.textContent === "X" && row8.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row2.textContent === "O" && row5.textContent === "O" && row8.textContent === "O") {
        winner = "O"
        moreaudio.play()
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        // console.log(winner)
    removelistener(winner)

    }
    if (row2.textContent === "X" && row5.textContent === "X" && row8.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
    removelistener(winner)

        // console.log(winner)
    }
    if (row2.textContent === "O" && row5.textContent === "O" && row8.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row3.textContent === "X" && row6.textContent === "X" && row9.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row3.textContent === "O" && row6.textContent === "O" && row9.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }



    // time for ther diagonal 
    if (row1.textContent === "X" && row5.textContent === "X" && row9.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row1.textContent === "O" && row5.textContent === "O" && row9.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row3.textContent === "X" && row5.textContent === "X" && row7.textContent === "X") {
        winner = "X"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    if (row3.textContent === "O" && row5.textContent === "O" && row7.textContent === "O") {
        winner = "O"
        document.querySelector(".expalination").textContent = "Winner is:- " + winner;
        moreaudio.play()
        // console.log(winner)
    removelistener(winner)

    }
    // if (row1.textContent != "===" && row2.textContent != "===" && row3.textContent != "===" && row4.textContent != "===" && row5.textContent != "===" && row6.textContent != "===" && row7.textContent != "===" && row8.textContent != "===" && row9.textContent != "==="&&
    //   winner!="") {      

    //     winner = "Tie"
    //     document.querySelector(".expalination").textContent = "No one won. But its:- " + winner;
    //     // console.log(winner)
    //     nayaaudio.play()
    // }

}

function resetgame() {
    document.querySelector("#row1").textContent = "==="
    document.querySelector("#row2").textContent = "==="
    document.querySelector("#row3").textContent = "==="
    document.querySelector("#row4").textContent = "==="
    document.querySelector("#row5").textContent = "==="
    document.querySelector("#row6").textContent = "==="
    document.querySelector("#row7").textContent = "==="
    document.querySelector("#row8").textContent = "==="
    document.querySelector("#row9").textContent = "==="
    document.querySelector("#row1").style = "font-size:15px";
    document.querySelector("#row2").style = "font-size:15px";
    document.querySelector("#row3").style = "font-size:15px";
    document.querySelector("#row4").style = "font-size:15px";
    document.querySelector("#row5").style = "font-size:15px";
    document.querySelector("#row6").style = "font-size:15px";
    document.querySelector("#row7").style = "font-size:15px";
    document.querySelector("#row8").style = "font-size:15px";
    document.querySelector("#row9").style = "font-size:15px";

    // giving the event listener again
    let row1 = document.querySelector("#row1").addEventListener('click', run1)
    let row2 = document.querySelector("#row2").addEventListener('click', run2)
    let row3 = document.querySelector("#row3").addEventListener('click', run3)
    let row4 = document.querySelector("#row4").addEventListener('click', run4)
    let row5 = document.querySelector("#row5").addEventListener('click', run5)
    let row6 = document.querySelector("#row6").addEventListener('click', run6)
    let row7 = document.querySelector("#row7").addEventListener('click', run7)
    let row8 = document.querySelector("#row8").addEventListener('click', run8)
    let row9 = document.querySelector("#row9").addEventListener('click', run9)


    document.querySelector(".expalination").textContent = "Current player was:- " + currentplayer;


}

function removelistener(winner) {
    if (winner === "X" || winner==="O") {
        document.querySelector("#row1").removeEventListener('click', run1)
        // document.querySelector("#row1").removeEventListener("click",run1)
        document.querySelector("#row2").removeEventListener("click", run2)
        document.querySelector("#row3").removeEventListener("click", run3)
        document.querySelector("#row4").removeEventListener("click", run4)
        document.querySelector("#row5").removeEventListener("click", run5)
        document.querySelector("#row6").removeEventListener("click", run6)
        document.querySelector("#row7").removeEventListener("click", run7)
        document.querySelector("#row8").removeEventListener("click", run8)
        document.querySelector("#row9").removeEventListener("click", run9)
    } else {
        console.log("i was looking is it running or not")

    }
}
