






var courses = [
    {
        id: 1,
        name: 'abc',
        coin: 0
    },
    {
        id: 2,
        name: 'fff',
        coin: 0
    },
    {
        id: 3,
        name: 'hhh',
        coin: 0
    },
    {
        id: 4,
        name: 'abc',
        coin: 3
    },
    {
        id: 5,
        name: 'uig',
        coin: 0
    }
];

var isFree = courses.every(function(course, index) {
    console.log(index);
    return courses.coin === 0;
});

console.log(isFree);


