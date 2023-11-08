import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Project from './components/Project';
import Blog from './components/Blog';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ProfilePage from './components/ProfilePage';


const App = () => {
  return (
       <div>
        <Home/>
        <Service/>
        <About/>
        <Project/>
        <Blog/>
        <Contact/>
        <ProductPage/>
        <ProfilePage/>
        <HomePage/>
       </div> 
  )
}

export default App;
