let myApp = new Vue({
    el: '#app',
    data: {
        fruits: Seed.fruits
    },
    computed: {
        getTotalPrice() {
            const subtotalArr = this.fruits.map(fruit => fruit.numInCart*fruit.price);
            const sumReduce = (a, b) => a + b;
            const totalPrice = subtotalArr.reduce(sumReduce, 0).toFixed(2);
            return totalPrice;
        }
    }
});