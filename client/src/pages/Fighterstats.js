
import React from "react";
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import CategoryMenu from "../components/CategoryMenu";


const Fighterstats = () => {
  return (
    <div className="container">
      <h1>Fighter Stats Placeholder</h1>
      This will show specific stats for the fighter selected from a dropdown
      {/* {make component to provide a drop down selection of fighters} */}
      {/* after selection if will populate the detailed figther specific stats */}
    </div>
  );
};

export default Fighterstats;
