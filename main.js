let myApp = new Vue({
    el: '#app',
    data: {
        fruits: Seed.fruits
    },
    computed: {
        getTotalPrice() {
            return 1;
            //return 'background: url(' + this + '); background-size: cover; display:block;';
        }
    }
});