import Home from './pages/Home';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Tutorial from './pages/Tutorial';
import './styles/style.css'
import Layout from './components/Layout/Layout';

function App() {
  
  const routes = (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tutorial" element={<Tutorial/>}/>
      <Route path="*" element={<>"404 NOT FOUND 404 NOT FOUND"</>}/>
    </Routes>
  )

  return (
    <Router>
      <Layout>
        {routes}
      </Layout>
    </Router>
  )
}

export default App;
