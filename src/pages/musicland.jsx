import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Products from "../components/product";
import Gallery from "../components/gallery";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Location from "../components/Location";

import {
  SITE,
  PRODUCTS,
  GALLERY,
  STATS
} from "../data/siteData";

export default function MusicLand() {
  return (
    <>
      <Navbar name={SITE.name} />
      <Hero site={SITE} stats={STATS} />
      <About site={SITE} />
      <Products products={PRODUCTS} />
      
      <Contact site={SITE} />
      <Location></Location>
      <Footer site={SITE} />

    </>
  );
}