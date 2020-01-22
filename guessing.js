let x= false;

start = () => {
    let answer= Math.floor(Math.random() * 11);
    console.log(answer);
    while (true) {
        let input = prompt("Guess the number in between 0-10");
        if (input >=0 && input <=10) {
            if (input > answer) {
                alert("The number is smaller than you think. Try Again!")
            }
            if (input < answer) {
                alert("The number is larger than anticipated. Try Again!")
            }
            if (input == answer) {
                alert("Congratulations, you have guessed the right number!")
                break;
            }
        }
        else {
            alert("Please enter an integer between 0-10.")
        }
    }
}



