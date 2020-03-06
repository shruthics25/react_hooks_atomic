import React from "react";
import Molecules from '../../molecules/index';

function Logincard() {
  return (
   <section>
      <Molecules.Formgroup/>
      <Molecules.Atoms.Custombutton buttonName="Login"/>
   </section>
  );
}

export default Logincard;
