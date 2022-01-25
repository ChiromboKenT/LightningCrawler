import UrlSearch from './components/UrlSearch';
import './styles/app.scss';
import AssetPage from './components/AssetPage';
import StatusLog from './components/StatusLog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Crawler 
      </header>
      <div className='App-section'>
        <div className="App-container">
          <UrlSearch/>
          <AssetPage/>
        </div>
        <StatusLog/>
      </div>
      
    </div>
  );
}

export default App;
