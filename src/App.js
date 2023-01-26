import "./App.css";
import Advantages from "./components/Advantages";
import BigAdvantages1 from "./components/BigAdvantages1";
import BigAdvantages2 from "./components/BigAdvantages2";
import Category from "./components/Category";
import Head from "./components/Head";
import HeadImage from "./components/HeadImage";
import Media from "./components/Media";
import PriceList from "./components/PriceList";
import MediaImg1 from "./Image/MediaImg1.png";
import MediaImg2 from "./Image/MediaImg2.png";
function App() {
  return (
    <div className="App">
      <Head />
      <HeadImage />
      <PriceList />
      <Media
        Img={MediaImg1}
        Title={"This holiday season, Google Pixel is giving back."}
        Text={
          " We're contributing $1 million to the NBA Foundation to help advance HBCU students in their careers across STEM, sports, and media industries."
        }
        Background={"#F8F9FA"}
      />
      <Advantages />
      <BigAdvantages1 />
      <Category />
      <BigAdvantages2 />
      <Media
        Img={MediaImg2}
        Title={"Putting sustainability to work."}
        Text={
          " We’re committed to using recycled or renewable material in all Pixel, Nest, and Fitbit products by 2025."
        }
        Background={"#FFFFFF"}
      />
      <Foot/>
    </div>
  );
}

export default App;
