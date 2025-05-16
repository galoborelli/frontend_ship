import Hero from "@/Sections/Hero/Hero";
import HowItWorks from "@/Sections/HowItWorks/HowItWorks";
import Header from "@/Sections/Header/Header";
import Carrousel from "@Sections/Carrousel/Carrousel";
import Reserve from "@/Sections/Reserve/Reserve";
import Footer from "@Sections/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import  getImages  from "@Redux/actions/bannersImages";

const Home = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log('Llamando a getImages');
    dispatch(getImages());
  }, [dispatch])

  return (
    <>
      <Header />
      <Hero id="hero" />
      <HowItWorks id="how-it-works" />
      <Carrousel id="carrousel" />
      <Reserve id="reserve" />
      <Footer id="footer" />
    </>
  );
};

export default Home;
