import logo from './logo.svg';
import './App.css';

import Receipt from './components/Receipt'
import receipt from './models/receipts'


const state = {
  receipt
}
// console.log(state)

function App() {
  return (
    <div className="App">
      <Receipt tagInfo={ state.receipt[0] }/>
      <Receipt tagInfo={ state.receipt[1] }/>
      <Receipt tagInfo={ state.receipt[2] }/>
    </div>
  );
}

export default App;
