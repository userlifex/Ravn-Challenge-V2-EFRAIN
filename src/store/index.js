import { createStore } from "vuex";
import { getDataPerson } from "../use/getDataPerson"
export default createStore({
    state: {
        people: [],
        lastCursor: "",
        hasNextPage: true,
        selectedId: "",
        selectedPerson: null,
        loading: false
    },
    mutations: {
        SET_LOADING(state, value) {
            state.loading = value;
        },
        SET_ERROR(state, value) {
            state.error = value
        },
        ADD_PEOPLE(state, people) {
            state.people.push(...people)
        },
        SET_LAST_CURSOR(state, value) {
            state.lastCursor = value
        },
        SET_HAS_NEXT_PAGE(state, value) {
            state.hasNextPage = value
        },
        SET_SELECTED_ID(state, value){
            state.selectedId = value
        },
        SET_SELECTED_PERSON(state, value){
            state.selectedPerson = value
        }

    },
    actions: {
        addPeople({ commit }, result) {
            if (result.hasNextPage.value) {

                commit("ADD_PEOPLE", result.dataPeople.value)

                const len = result.dataPeople.value.length

                const lastCursor = result.dataPeople.value[len - 1].cursor

                commit("SET_LAST_CURSOR", lastCursor)
            } else {
                commit("SET_HAS_NEXT_PAGE", false)
            }
        },
        setHasNextPage({ commit }, value) {
            commit("SET_HAS_NEXT_PAGE", value)
        },
        selectId({commit}, id){
            commit("SET_SELECTED_ID", id)
        },
        setPerson({commit}, result){
            commit("SET_SELECTED_PERSON", result.person)
        }
    },
    getters: {
        getAllPeople(state) {
            return state.people;
        },
        id(state){
            return state.selectedId;
        }
    }
})