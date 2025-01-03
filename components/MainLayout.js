import Header from "./header";
import Footer from "./footer";

export default function MainLayout(props) {
    return (
      <>
      <Header />
      {props.children}
      <Footer />
          </>
    )
  }
  