import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houses: [],
    newHouse: {
      owner: '',
      address: '',
      description: '',
      price: '',
      photo: '',
      contact: '',
      location: ''
    },
    center: {
      lat: -6.260705,
      lng: 106.781632
    },
    position: {
      lat: -6.260705,
      lng: 106.781632
    },
    positionChanged: {
      lat: -6.260705,
      lng: 106.781632
    }
  },
  mutations: { //untuk merubah kondisi state
    GET_HOUSES(state, payload){
      state.houses = payload
    },
    ADD_HOUSE(state, payload){
      state.houses.push(payload)
    },
    DEL_HOUSE(state, payload){
      let index = state.houses.findIndex(val => val._id == payload)
      state.houses.splice(index,1)
    },
    UPDATE_HOUSE(state, house){
      state.houses.splice(state.houses.indexOf(house), 1, house)
    },
    GET_ONE_HOUSE(state, house) {
      state.newHouse = house
    },
    SET_POSITIONCHANGE(state, event) {
      state.positionChanged = {
        lat: event.lat(),
        lng: event.lng()
      },
      state.newHouse.location = {
        lat: event.lat(),
        lng: event.lng()
      }
    },
    SET_CENTER_ON_EDIT(state, value){
      state.center = {
        lat: value.lat,
        lng: value.lng
      }
    }
  },
  actions: { //untuk melakukan request ke DB dan commit mutations
    getHouses({commit}){
      axios.get(`http://localhost:3000/house`)
      .then(function(response){
        console.log("GET RES ",response.data);
        commit('GET_HOUSES', response.data)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    addHouse({commit}, house){
      axios.post(`http://localhost:3000/house`, {
        owner: house.owner,
        address: house.address,
        description: house.description,
        price: house.price,
        photo: house.photo,
        contact: house.contact,
        lat: house.location.lat,
        lng: house.location.lng
      })
      .then(function(response){
        console.log(response.data);
        commit('ADD_HOUSE', response.data)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    deleteHouse({commit}, id){
      axios.delete(`http://localhost:3000/house/${id}`)
      .then(function(response){
        console.log(response.data);
        commit('DEL_HOUSE', id)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    updateHouse({commit}, house){
      axios.put(`http://localhost:3000/house/${house._id}`, {
        owner: house.owner,
        address: house.address,
        description: house.description,
        price: house.price,
        photo: house.photo,
        contact: house.contact,
        lat: house.location.lat,
        lng: house.location.lng
      })
      .then(function(response){
        console.log(response.data);
        commit('UPDATE_HOUSE', house)
      })
      .catch(function(error){
        console.log('ERRRR ', error);
      })
    },
    getOneHouse({commit}, house) {
      commit('GET_ONE_HOUSE', house)
    },
    changePosition({commit}, value){
      commit('SET_POSITIONCHANGE', value)
    },
    setCenterOnEdit({commit}, value){
      commit('SET_CENTER_ON_EDIT', value)
    }
  },
  getters: { // untuk me-return state
    houses(state) {
      return state.houses
    },
    newHouse(state) {
      return state.newHouse
    },
    getCenter(state) {
      return state.center
    },
    getPosition(state) {
      return state.position
    }
  }
})
