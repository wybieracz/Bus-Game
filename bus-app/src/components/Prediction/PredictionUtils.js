export function checkBoard(board) {
    for (let i = 0; i < 5; i++) {
        if(board[i] === null) return false;
    }
    return true;
}

export function calculateProbability(deck, board, position) {
    const current = board[position];
    let high = 0;
    let equal = 0;
    let low = 0;

    deck.forEach((e, i) => {
        if(i < current) low += e;
        else if(i === current) equal+= e;
        else high += e;
    });

    return (high + equal + low === 0)
        ? [0, 0, 0]
        : [(high / (high + equal + low)) * 100, (equal / (high + equal + low)) * 100, (low / (high + equal + low)) * 100]
}