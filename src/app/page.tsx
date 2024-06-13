import Layout from "@/components/layouts/Layout";

import AboutUs from "./components/AboutUs";
import ArrowDetail from "./components/ArrowDetail";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import UnitNetwork from "./components/UnitNetwork";
import WordMarquee from "./components/WordMarquee";

export default function Home() {
  return (
    <Layout className="overflow-y-clip">
      <Hero />
      <WordMarquee />
      <AboutUs />
      <ArrowDetail />
      <UnitNetwork />
      <ContactUs />
    </Layout>
  );
}
