import 'antd/dist/antd.css'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ItemList from './components/ItemLists/ItemList'
import FooterAccueil from './components/Footer/FooterAccueil'
import {Switch,Route} from 'react-router-dom'
import Formulaire from './components/Form/Formulaire'
import {useState} from 'react'
import Plats from './pages/Plats/Plats'




function App() {
  const [courses, setCourses] = useState([])

  const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/courses')
      const data = await response.json()
      console.log(data)
      setCourses(data)
  }

  return (
    <div className="App">
      <Header />
      <Navbar fetchCourses={fetchCourses}/>
     
      <Switch>
        <Route path="/home"><ItemList/></Route>
        <Route path="/où"><Formulaire/></Route>
        <Route path="/plats"><Plats plats={courses}/></Route>
        {/* <Redirect to="/home" /> */}
      </Switch>
      <FooterAccueil />

    </div>
  );
}

export default App;
