/* jshint esversion: 8 */
import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3'

import * as types from './mutation-types'
import { StorageContract } from '../contract'

Vue.use(Vuex)

const state = {
    account: '',
    name: '',
    age: ''
};
const getters = {
    account: state => state.account,
    //console.log("Prabhat: account")
    name: state => state.name,
    age: state => state.age

};
const actions = {
    async initWeb3({dispatch}){ 
            if (window.ethereum) {
                window.web3 = new Web3(ethereum);
                ethereum.enable();
                dispatch('watchwebAccount');
                dispatch('setCurrentProvider');
                //console.log("Prabhat Etherrium new window object");           
            }
            // Legacy dapp browsers..
            else if (window.web3) {
                window.web3 = new Web3(web3.currentProvider);
                dispatch('watchwebAccount');
                //console.log("Prabhat Etherrium old window object");
            }
            // Non-dapp browsers...
            else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        },

    async watchwebAccount({state, dispatch, commit}) {
        console.log("Prabhat: Action start with watchwebAccount");
            setInterval(async() => {
                const accounts = await web3.eth.getAccounts();
                const activeAccount = accounts[0];
                //console.log(activeAccount);
                if (!activeAccount) return;
                //console.log("Prabhat: Action start3")
                if (activeAccount !== state.account){
                 //   console.log("Prabhat: Action start3")
                    commit(types.UPDATE_ACCOUNT, activeAccount);
             }
            }, 500);
        
        },
        setCurrentProvider(){
            StorageContract.setProvider(web3.currentProvider);
        },

        setData(){
            StorageContract.deployed().then(async (instance) => {
                try{
                    await instance.setData(state.name, state.age, {from: state.account});
                    console.log('success');
                } catch (err){
                    console.error(err);
                }
            })
        },
        
};
const mutations = {
    [types.UPDATE_ACCOUNT](state, account){
        state.account = account;
    },
    [types.UPDATE_NAME](state, name){
        state.name = name;
    },
    [types.UPDATE_AGE](state, age){
        state.age = age;
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});