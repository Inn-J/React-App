import logo from './logo.svg';
import './App.css';
import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
 //return <h1>Hello React</h1>
}

export default App;
//<h1>Hello React</h1>
//style={{ padding: '4rem 0', margin: '0 auto', maxWidth: 1200 }