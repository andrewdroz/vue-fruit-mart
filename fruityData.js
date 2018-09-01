window.Seed = function(){
    const fruits = [
        {
            id: 1,
            name: 'Apples',
            url: 'images/apples.jpg',
            price: 0.4,
            numInCart: 48
        },
        {
            id: 2,
            name: 'Oranges',
            url: 'images/oranges.jpg',
            price: 0.8,
            numInCart: 200
        },
        {
            id: 3,
            name: 'Durians',
            url: 'images/durians.jpg',
            price: 2.1,
            numInCart: 26
        }
    ];

    return { fruits: fruits };
}();