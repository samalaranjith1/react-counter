import './App.css';
import { useReducer } from 'react';

const ACTIONS={
  INCREMENT:'increment',
  DECREMENT:'decrement',
  RESET:'reset'
}
function reducer(state,action){
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count:state.count+1}
    case ACTIONS.DECREMENT:
      return {count:state.count-1}
    case ACTIONS.RESET:
      return {count:state.count-state.count}    
  }

}

function App() {
  const [state,dispatch]=useReducer(reducer,{ count : 0 })
  function increment(){
    dispatch({type: ACTIONS.INCREMENT});
  };
  function decrement(){
    dispatch({type: ACTIONS.DECREMENT});
  }
  function reset(){
    dispatch({type: ACTIONS.RESET});
  }
  return (
    <div className="App">
       <div className='appValues'>
       <button className='appButton' onClick={increment} >+</button>
      <h1 className='appCount'>{state.count}</h1>
      <button className='appButton' onClick={decrement}>-</button>
       </div>
       <div className='appRest'>
       <button className='reset' onClick={reset} >reset</button>
       </div>
    </div>
  );
}

export default App;
