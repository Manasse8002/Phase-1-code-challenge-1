const speed =  parseInt(prompt("Enter speed"));
 function speedDetector(speed) {
    const limit=70 ;
    if (speed <= limit )
    return `safe`;
    else if (speed > limit && speed < 135){
        let points = math.floor((speed-limit)/5)
        return`points:${points}`;

    }
    else {
        return `expired liscence`;
    }
}
console.log(speedDetector(139));