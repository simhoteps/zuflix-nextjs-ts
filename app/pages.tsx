import "styles/reset.css";
import "styles/global.css";

import { Footer } from "components/footer";
import { Header } from "components/header";

const Pages = ({ children }: any) => {
  return (
    <body className="appContainer">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Pages;
