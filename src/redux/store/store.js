import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "../reducers/rootReducer"
import { composeWithDevTools } from "@redux-devtools/extension"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "../actions/productActions"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store
