import {createStore} from 'redux'
import rootReducer   from '../Reducers'

export let store = createStore(rootReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())