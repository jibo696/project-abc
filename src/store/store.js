import {createStore} from 'redux'
//定义action
function collect_action(item) {
  return {
    type: 'COLLECT_ACTION',
    item
  }
}
//定义reducer
function action_reducer(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'COLLECT_ACTION':
      var findItem = state.find((item, index) => {
        return item.id === action.item.id
      })
      if (!findItem) {
        state.push(action.item)
      }
      return state;
    default:
      return state

  }

}

//创建store
var store = createStore(action_reducer);
export {
  store,
  collect_action
}