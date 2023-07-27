import "./HeroSection.css";
import Carousel from "../Carousel";
import {images} from "./constants"


const HeroSection = () => {

    return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To College Of Engineering</h1>
      </header>
      <main>
        <Carousel images={images} />
      </main>
    </div>
  );
}

export default HeroSection;