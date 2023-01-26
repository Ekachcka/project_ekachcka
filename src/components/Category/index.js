import ExampleCategory from '../ExampleCategory';
import './Category.css';
import Category1 from '../../Image/Category1.png';
import Category2 from '../../Image/Category2.png';
import Category3 from '../../Image/Category3.png';
import Category4 from '../../Image/Category4.png';
function Category() {
  return (
    <div className="Category">
            <ExampleCategory Img={Category1} Text={"Cameras"}/>
            <ExampleCategory Img={Category2} Text={"Doorbells"}/>
            <ExampleCategory Img={Category3} Text={"Streaming"}/>
            <ExampleCategory Img={Category4} Text={"Packages"}/>
    </div>
  );
}

export default Category;