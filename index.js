// code your solution here



function superbowlWin(record){
    let winningYear = record.find(wanted => wanted.result === "W")
    if (winningYear){
        return winningYear.year
    }else{
        return winningYear;
    }
}
