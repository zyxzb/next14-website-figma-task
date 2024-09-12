import Gallery from './_components/Gallery';
import HeadersBlock from './_components/HeadersBlock';
import Hero from './_components/Hero';
import Seo from './_components/Seo';

export default function Home() {
  return (
    <main>
      <Hero />
      <HeadersBlock />
      <Gallery />
      <Seo />
    </main>
  );
}
