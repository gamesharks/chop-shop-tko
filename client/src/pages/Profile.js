import React from "react";
import Profile from '../components/Profile/index';

const ProfileBackground = () => {

  return (
    // can replace this with an actual image if needed later
    <div className="" style={{
      background: 'black',
      width: '100vw',
      minHeight: '100vh',
    }}>

<div className="container">
        <h1>Profile</h1>
          <Profile /> 

        </div>
  </div>
  );
};

export default ProfileBackground;       