import './App.css';
import Advantages from './components/Advantages';
import BigAdvantages1 from './components/BigAdvantages1';
import BigAdvantages2 from './components/BigAdvantages2';
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
        <BigAdvantages1/>
        <Category/>
        <BigAdvantages2/>
    </div>
  );
}

export default App;