import './App.css';
import Head from './components/Head';
import HeadImage from './components/HeadImage';
import Media from './components/Media';
import PriceList from './components/PriceList';

function App() {
  return (
    <div className="App">
        <Head/>
        <HeadImage/>
        <PriceList/>
        <Media/>
    </div>
  );
}

export default App;