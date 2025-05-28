import Hero from "@/Sections/Hero/Hero";
import HowItWorks from "@/Sections/HowItWorks/HowItWorks";
import Header from "@/Sections/Header/Header";
import Carrousel from "@Sections/Carrousel/Carrousel";
import Reserve from "@/Sections/Reserve/Reserve";
import Footer from "@Sections/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getImages from "@Redux/actions/bannersImages";
import Loader from "@Components/Loader";
import { loaderActive } from "@Redux/actions/loaderActions";

const Home = () => {
  const dispatch = useDispatch();
  const { images } = useSelector(state => state.images);
  const isLoading = useSelector(state => state.loader.isLoadingById["home"]);

  useEffect(() => {
    const loadImages = async () => {
      dispatch(loaderActive({ id: "home", value: true }));
      await dispatch(getImages())
      console.log("IMÁGENES:", images);
      dispatch(loaderActive({ id: "home", value: false }));
    };

    loadImages();
  }, [dispatch]);

  if (isLoading || !images) return <Loader id="home" />;

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
