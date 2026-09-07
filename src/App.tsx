import { Contacts } from './components/Contacts';
import { FinalCta } from './components/FinalCta';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Principles } from './components/Principles';
import { Reviews } from './components/Reviews';
import { Services } from './components/Services';
import { Studio } from './components/Studio';
import { Works } from './components/Works';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Studio />
        <Services />
        <Works />
        <Principles />
        <Reviews />
        <FinalCta />
      </main>
      <Contacts />
    </>
  );
}
