import logo from './logo.svg';
import './App.css';
import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
//<h1>Hello React</h1>
//style={{ padding: '4rem 0', margin: '0 auto', maxWidth: 1200 }