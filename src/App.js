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
import Dessert from './pages/Dessert/Dessert'
import Drink from './pages/Drink/Drink'
import Panier from './pages/Panier/Panier'




function App() {
  // const [courses, setCourses] = useState([])

  // const fetchCourses = async () => {
  //     const response = await fetch('http://localhost:5000/courses')
  //     const data = await response.json()
  //     console.log(data)
  //     setCourses(data)
  // }
 const addToCart = async (info) => {
        const reponse = await fetch('http://localhost:5000/panier', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: info.id,
                name: info.name

            })
        })

        // const data = await response.json()
    }


  return (
    <div className="App">
      <Auth>
        <Header />
        <Navbar /* fetchCourses={fetchCourses} */ />

        <Switch>
          <Route path="/menu"><h1>Hello menu</h1></Route>
          <Route path="/entrées"><h1>Hello entrées</h1></Route>
          <Route path="/desserts"><Dessert/></Route>
          <Route path="/boissons"><Drink addToCart={addToCart}/></Route>
          <Route path="/où"><Formulaire /></Route>
          <Route path="/inscription"><FormInscription /></Route>
          <Route path="/plats"><Plats /* plats={courses} */ /></Route>
          <Route path="/login"><FormLogin /></Route>
          <Route path="/panier"><Panier/></Route>
          <Route path="/" exact><ItemList /></Route>
          {/* <Redirect to="/home" /> */}
        </Switch>
        <FooterAccueil />
      </Auth>

    </div>
  );
}

export default App;
