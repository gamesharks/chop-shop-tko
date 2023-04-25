import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import backgroundImage from '../assets/images/background01.jpg';
import EditorsPicks from '../components/EditorsPicks';

const Home = () => {
  return (
    <div className="" style={{
       backgroundImage: `url(${backgroundImage})`,
       backgroundSize: '',
       width: '100vw',
       height: '100vh',

     }}>
         
      <h1 style={{color: 'white'}}> Editors Picks
      </h1>
      
      {/* component to render editors picks on left hand side of background image */}
      <EditorsPicks />
        
      
      {/* component or just image for promo version of upcoming main event fight */}
      
    </div>
  );
};

export default Home;
