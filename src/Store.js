import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialStore = {}

const Store = createStore(
                rootReducer,
                initialStore,
                compose(
                    applyMiddleware(thunk),
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                )
            )   

export default Store