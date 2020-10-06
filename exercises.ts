some([1, 2, 3, 4], pairs); // true
some([1, 3, 5], pairs); // false

every([1, 2, 3, 4], pairs); // false
every([2, 4, 6], pairs); // true

zip([1, 2, 4], ['A', 'B', 'C', 'D']); // [[1, "A"], [2, "B"], [4, "C"]]
zipWith([0, 1, 2, 4], [5, 7, 8], sum); // [0+5, 1+7, 2+8]

// implementar some con reduce
// implementar every con reduce

// implementar zip con zipWith

// implmentar map con reduce
// implmentar filter con reduce
