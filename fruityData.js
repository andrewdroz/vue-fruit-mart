window.Seed = function(){
    const fruits = [
        {
            id: 1,
            name: 'Californian Apples',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            url: 'images/apples.jpg',
            price: 0.4,
            numInCart: 0
        },
        {
            id: 2,
            name: 'Taiwanese Oranges',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            url: 'images/oranges.jpg',
            price: 0.8,
            numInCart: 0
        },
        {
            id: 3,
            name: 'Malaysian Durians',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            url: 'images/durians.jpg',
            price: 2.1,
            numInCart: 0
        }
    ];

    return { fruits: fruits };
}();