import 'antd/dist/antd.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemLists/ItemList';

function App() {


  return (
    <div className="App">
      <Header />
      <Navbar />
      <ItemList/>
     
    </div>
  );
}

export default App;
