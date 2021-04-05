function Search(arr, value) {
    let index = 0;

    let max = arr.length - 1;

    while (index <= max) {
        let searching = Math.ceil((index + max) / 2);
        let  split = array[searching];

        if (value > split) {
            index = searching + 1;
            continue;
        }
        if (value < split) {
            max = searching - 1;
            continue;
        }
        return searching;
    }
    //return --?
}
