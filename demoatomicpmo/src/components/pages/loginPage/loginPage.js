import React from "react";
import Template from "../../ui/templates";
import Header from "../../ui/organisms/header/header";

function LoginPage() {
  return (
   <section>
     <Header/>
     <Template.LoginTemplate />
   </section>
  );
}

export default LoginPage;
