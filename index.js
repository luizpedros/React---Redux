//importar redux
const redux = require('redux');
const createStore = redux.createStore;

//1º Definir a ação (para exemplo de contador)

const incrementAction = {type:'INCREMENT'}
const decrementAction = {type:'DECREMENT'}

// 2º A ação depende do reducer, pois ele leva a o pedido que a acão quer fazer
//O que o reducer precisa fazer vai depender de qual ação foi chamada.


//caso a ação seja increment some 1 ou caso seja decrement subtraia 1
function counterReducer(state=0, action){
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            state;
    }
}

//3º Criar store para passar o status daa ação para Store amazenar esse status da ação

const store = createStore(counterReducer);

store.subscribe(()=>{console.log(store.getState())})


