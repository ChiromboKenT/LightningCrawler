import './styles/app.scss';
import ApiContextProvider from './Context/ApiContext';
import Section from './components/Section';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        Crawler 
      </header>
      <ApiContextProvider>
          <Section/>
      </ApiContextProvider>
    </div>
  );
}

export default App;
