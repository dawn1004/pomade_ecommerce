import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        name: "mamamammamamama",
        products: [
            {
                url: require(`../assets/pomades/product (1).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (2).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (3).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (4).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (5).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (6).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (7).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (8).jpg`),
                name: "Greasy Basky POmade1",
                price: 560.0,
                description: { hold: 2, shine: 2, washability: 2, restylability: 5 },
            },
        ],
        cart: []
    },
    mutations: {
        addProductsOnCart: (state, args) => {
            if (args.byIndex == true) {
                state.cart.push(state.products[args.index]);

            } else {
                state.cart.push(args.obj);
            }
            console.log(state.cart[0]);
        }
    }

})