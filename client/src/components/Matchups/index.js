import React from "react";


//Component for sideby side fighters and lineups, maybe split into two components or not

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Matchups(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default Matchups;
