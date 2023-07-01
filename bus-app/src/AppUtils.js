export function cardClick(id, deck, setDeck, board, setBoard, position, setPosition, direction, setDirection) {
    deck[id]--;
    setDeck([...deck]);
    board[position] = id;
    setBoard([...board]);
    if((position === 4 && direction) || (position === 0 && !direction)) setDirection(prev => !prev);
    else direction ? setPosition(prev => prev + 1) : setPosition(prev => prev - 1);
}