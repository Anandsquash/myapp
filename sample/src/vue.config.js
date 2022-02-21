module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: '@import "@/assets/styles/style.scss";'
        }
      }
    }
  }
//   import { createStore } from "vuex";
// export default createStore({
//     state: {
//         properties: [],
//     },
//     getters: {
//         title:(state) => state.title,
//         properties: (state) => state.properties,
//     },
//     mutations: {
//       addProperties({ properties }, payload) {
//         properties.push(payload)
//         console.log('properties=>>',properties)
//       },
//       changeProperties({ properties }, {id,data}) {
//         properties[id - 1]=data
//         console.log('changeProperties=>>',properties)
//       },
//       clear(state) {
//         return (state.properties = [])
//       },
//     },
//     actions: {
//       addProperties(context, payload) {
//         context.commit("addProperties", payload)
//       },
//       changeProperties(context, payload) {
//         context.commit("changeProperties", payload)
//         console.log("changeProperties", payload);
//       },
//       clear(context) {
//         context.commit("clear")
//       },
//     },
//     modules: {
//     },
// });