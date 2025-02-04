/** @format */
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./pages/home/home-page";
import "./reset.css";
// import Home

const App = () => {
  return (
    <>
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  );
};

export default App;
