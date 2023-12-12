import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Invitation from "../components/Invitation";
import NavigationBar from "../components/NavigationBar";
import People from "../components/People";
import Wedding from "../components/Wedding";
import Kids from "../components/Kids";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Gian & Ave 2023</title>
        <link rel="icon" href="images/logo.png" />
      </Head>

      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Wedding />
        <People />
        <Gallery />
          <Kids />
        <Invitation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
