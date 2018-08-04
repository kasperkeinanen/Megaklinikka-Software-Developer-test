function wordsInaBox(words) {
    /*
    The function wordsInBox() takes in a string and prints the string inside of a box constructed by "*".
    Every word is printed on a separate row and aligned to the left. The rest of the row is filled with
    spaces " ".
    Example:
        string = "Hello World in a frame"
        console:
                *********
                * Hello *
                * World *
                * in    *
                * a     *
                * frame *
                *********
    Input: words
    Output: -
     */
    let longestWord = 0;
    let wordLength = 0;
    // The loop finds the longest word from the sentence.
    for (i = 0; i < words.length; i++){
        if (words[i] === " "){
            if (wordLength > longestWord){
                longestWord = wordLength;
                wordLength = 0;
                continue;
            }
            else {
                wordLength = 0;
                continue;
            }
        }
        wordLength++;
    }
    if (wordLength > longestWord) {
        longestWord = wordLength;
    }
    let stars = "";
    for (i = 0; i < longestWord +2; i++){
        stars += "*"
    }
    // Log the first row
    console.log(stars);
    let row = "*";
    for (i = 0; i < words.length; i++){
        if (words[i] === " "){
            let spaceLeft = longestWord - row.length;
            for(j = 0; j <= spaceLeft; j++){
                row += " ";
            }
            row += "*";
            // Log content
            console.log(row);
            row = "*";
            continue;
        }
        row += words[i];
    }
    let spaceLeft = longestWord - row.length;
    for(j = 0; j <= spaceLeft; j++){
        row += " ";
    }
    row += "*";
    // Log last rows
    console.log(row);
    console.log(stars);
}