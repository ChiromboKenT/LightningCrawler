import UrlSearch from './components/UrlSearch';
import './styles/app.scss';
import AssetPage from './components/AssetPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Crawler 
      </header>
      <div className="App-container">
        <UrlSearch/>
        <AssetPage/>
      </div>
      <></>
    </div>
  );
}

export default App;
