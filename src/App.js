import 'antd/dist/antd.css'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ItemList from './components/ItemLists/ItemList'
import FooterAccueil from './components/Footer/FooterAccueil'
import { Switch, Route } from 'react-router-dom'
import Formulaire from './components/Form/Formulaire'
import Plats from './pages/Plats/Plats'
import FormLogin from './components/Form/FormLogin'
import FormInscription from './components/Form/FormInscription.jsx'
import Auth from './components/Security/Auth'




function App() {
  // const [courses, setCourses] = useState([])

  // const fetchCourses = async () => {
  //     const response = await fetch('http://localhost:5000/courses')
  //     const data = await response.json()
  //     console.log(data)
  //     setCourses(data)
  // }



  return (
    <div className="App">
      <Auth>
        <Header />
        <Navbar /* fetchCourses={fetchCourses} */ />

        <Switch>
          <Route path="/menu"><h1>Hello menu</h1></Route>
          <Route path="/entrées"><h1>Hello entrées</h1></Route>
          <Route path="/desserts"><h1>Hello desserts</h1></Route>
          <Route path="/boissons"><h1>Hello boissons</h1></Route>
          <Route path="/où"><Formulaire /></Route>
          <Route path="/inscription"><FormInscription /></Route>
          <Route path="/plats"><Plats /* plats={courses} */ /></Route>
          <Route path="/login"><FormLogin /></Route>
          <Route path="/" exact><ItemList /></Route>
          {/* <Redirect to="/home" /> */}
        </Switch>
        <FooterAccueil />
      </Auth>

    </div>
  );
}

export default App;
