import {setStore} from "@/util/store"

const common = {
    state: {
        screen: -1
    },
    actions: {},
    mutations: {
        SET_SCREEN: (state, screen) => {
            state.screen = screen
            setStore({
                name: 'screen',
                content: state.screen,
                type: 'session'
            })
        }
    }
}

export default common