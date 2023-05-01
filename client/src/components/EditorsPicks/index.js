import React from 'react';

// images for editors picks, can overwrite image in assets folder w same name if you would like diff image
import Gerardo from '../../assets/images/Gerardo.jpg';
import Craig from '../../assets/images/Craig.jpg';
import Kevin from '../../assets/images/Kevin.jpg';
import Adrian from '../../assets/images/Adrian.jpg'; 

const ParagraphSection = ({ name, image, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '.2rem' }}>
      <img src={image} alt={`${name}'s profile`} style={{ marginBottom: '6rem', marginRight: '1rem', borderRadius: '50%', width: '70px', height: '70px' }} />
      <div>
        <h4 style={{ margin: 0 }}>{name}</h4>
        <p style={{ margin: 0}}>{text}</p>
        
      </div>
    </div>
  );
};

// NEED TO WORK ON PUTTING THESE INLINE STYLES IN THERE OWN CSS FOR THIS COMPONENT and drying out duplicate css, 
// Also still needs a promo image of headline fight 
const EditorsPicks = () => {
  return (
    <div style={{ marginLeft: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ marginBottom: '1rem', maxWidth: '50vw', color: '#E53935' }}>
        <ParagraphSection
          name="Gerardo"
          image={Gerardo} 
          text="Marshall vs. Gomis - I expect this to be a fun fight between two up-and-coming prospects. Marshall will have the edge on the mat, while Gomis will have the edge on the feet. This should come down to whether or not Marshall gets this to the mat. If he attempts to strike with Gomis, he likely gets knocked out. In such a close fight, I prefer the dog. "
                // ^^ old data for mockup, can update or pull from database with current ucf 288 when avail
        />
      </div>
      <div style={{ marginBottom: '1rem', maxWidth: '50vw', color: '#E53935' }}>
        <ParagraphSection
          name="Adrian"
          image={Adrian}
          text="Usman vs. Tafa - Tafa will be making his UFC debut, and I expect this fight to be a slower-paced striking match. If Usman picks up his volume, I would give him a slight edge, but I see Tafa out-striking him 2-1 if this goes to the judges. Without a finish, I do not expect a high score."
        />
      </div>
      <div style={{ marginBottom: '1rem', maxWidth: '50vw', color: '#E53935' }}>
        <ParagraphSection
          name="Kevin"
          image={Kevin}
          text="Rosa vs. Dumont - This should be another close fight. I expect a lot of clinches and kicks to be thrown. Dumont is the more defensive fighter and looks to control the ring, while Rosa tends to push forward with more volume. The fight should go to a decision with Rosa having more volume and damage done."
        />
      </div>
      <div style={{ marginBottom: '1rem', maxWidth: '50vw', color: '#E53935' }}>
        <ParagraphSection
          name="Craig"
          image={Craig}
          text="Glenn vs. Giagos - Giagos can keep this fight close if he is the one shooting for takedowns and keeping control on the mat. Glenn will have an edge on the feet but is also solid on the mat. The winner of this fight should score well, and the slight lean is to the favorite. "
        />
      </div>
    </div>
  );
};

export default EditorsPicks;
