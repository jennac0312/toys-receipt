import logo from './logo.svg';
import './App.css';

import Receipt from './components/Receipt'
import receipts from './models/receipts'


// console.log(state)

function App() {
  return (
    <div className="App">
      {receipts.map((receipt) => {
        return (
          <Receipt tagInfo={receipt}/>
        )
      })}
    </div>
  );
}

export default App;
