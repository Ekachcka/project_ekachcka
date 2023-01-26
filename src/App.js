import './App.css';
import Advantages from './components/Advantages';
import BigAdvantages from './components/BigAdvantages';
import Category from './components/Category';
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
        <Advantages/>
        <BigAdvantages/>
        <Category/>
    </div>
  );
}

export default App;