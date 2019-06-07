$(document).ready(() => {
    //generates a random number between 25-150
    let randNumber = Math.floor(Math.random() * ((150 - 25) + 1) + 19);
    $('#randNum').html(randNumber);

    //sets hidden value of each jewel ranging from 1-20
    let amethyst = Math.floor(Math.random() * 20) + 1;
    let emld = Math.floor(Math.random() * 20) + 1;
    let ruby = Math.floor(Math.random() * 20) + 1;
    let sapphire = Math.floor(Math.random() * 20) + 1;

    //displays total score
    let wins = 0;
    let losses = 0;
    let totalScore = 0;
    
    //win counter
    $('#totScore').text(totalScore);
    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }
    // loss counter
    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    $('#amethyst').click(() => {
        totalScore = totalScore + amethyst
        $('#totScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } 
        else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#emld').click(() => {
        totalScore = totalScore + emld;
        $('#totScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } 
        else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#ruby').click(() => {
        totalScore = totalScore + ruby;
        $('#totScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } 
        else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#sapphire').click(() => {
        totalScore = totalScore + sapphire;
        $('#totScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } 
        else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    //determines if player wins or loses.
    //the outcome is then recorded in 'winsLosses' and resets
    function reset() {
        totalScore = 0;
        $('#totScore').text(totalScore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((150 - 25) + 1) + 19);
        $('#randNum').html(randNumber);
        amethyst = Math.floor(Math.random() * 20) + 1;
        emld = Math.floor(Math.random() * 20) + 1;
        ruby = Math.floor(Math.random() * 20) + 1;
        sapphire = Math.floor(Math.random() * 20) + 1;
    }
});