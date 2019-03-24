import React from "react";
import SiteContainer from "../SiteContainer";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";

export default ({ children }) => (
  <SiteContainer>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </SiteContainer>
);
