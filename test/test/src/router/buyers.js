import BusinessComponent from '../views/business'
import BuyersComponent from '../views/business/Buyers/index.vue'
import AddBuyerComponent from '../views/business/Buyers/addBuyer/addBuyer.vue'
import EditBuyerComponent from '../views/business/Buyers/addBuyer/editBuyer.vue'
import store from '../store/index.js'


export const BusinessRoutes = [
    {
        path: "/business",
        component: BusinessComponent,
        children: [
            {
                path: '/business/event',
                component: BuyersComponent,
                name: 'buyers',
                beforeEnter: (to, from, next) => {
                    if (store.state.properties.length==0) {
                        next({
                        path: '/business/add-event', // back to safety
                        })
                    } else {
                        next()
                    }
                },
            },
            {
                path: "add-event",
                component: AddBuyerComponent,
                name:'addEvent'
            },
            {
                path: "edit-event/:id",
                component: EditBuyerComponent,
                name:'editTask'
            },
        ],
    }
];


export default BusinessRoutes;