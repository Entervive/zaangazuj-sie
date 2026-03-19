/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Activities from './components/Activities';
import KnowledgeBase from './components/KnowledgeBase';
import PartnersBanner from './components/PartnersBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Activities />
        <KnowledgeBase />
      </main>
      <PartnersBanner />
      <Footer />
    </div>
  );
}
