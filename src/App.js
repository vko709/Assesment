import logo from './logo.svg';
import './App.css';
import ImageGallery from './Image';
function App() {
  const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];

  return (
    <div>
      <ImageGallery links = {links}/>
    </div>
  );
}

export default App;
