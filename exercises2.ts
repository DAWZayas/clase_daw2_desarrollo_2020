take([1, 4, 5, 6, 7], 3); //[1,4,5]
take([1, 4], 3); //[1,4]

takeWhile([2, 4, 5, 6, 7], pair); // [2,4]

drop([1, 4, 5, 6, 7], 3); //[6,7]
drop([1, 4], 3); //[]

dropUntil([1, 3, 6, 4, 5], pair); // [6,4,5]

// implementar take con takeWhile
// implementar drop con dropUntil

odd = not(pair);

odd(1); // true
odd(2); // false

flippedTake = flip(take);

flippedTake(3, [1, 4]); // [1,4]
