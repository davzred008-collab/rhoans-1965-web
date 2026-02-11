import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Book, Users, History, Home, 
  ChevronRight, Award, Shield, MapPin, 
  ExternalLink, Info, Scroll, Scale
} from 'lucide-react';

// --- Data Constants ---
const MOTTO = "Advocates for Righteousness and Scholarship";
const FOUNDING_DATE = "June 3, 1965";
const FOUNDER = "Atty. Rodrigo G. Roy";

const COUNCIL_OFFICERS = [
  { role: "Grand Rhoan", name: "Ronald Garcellano" },
  { role: "Vice Grand Rhoan", name: "Roderick Fabrigas" },
  { role: "Scroll", name: "Venus Venturillo" },
  { role: "Asst Scroll", name: "Julie Ann Llano" },
  { role: "Coffer", name: "Imee Montealegre" },
  { role: "Asst Coffer", name: "Wilma Andao" },
  { role: "Tribune", name: "Lorelyn Basa" },
  { role: "Asst Tribune", name: "Nelia De Guzman" },
  { role: "Grand Senior Adviser", name: "Lolito Jun Buñi" }
];

const BYLAWS_PREVIEW = [
  { id: 1, title: "Article I: The Name", content: "The name of this organization shall be ALPHA RHO SIGMA FRATERNITY AND SORORITY (RHOANS)." },
  { id: 2, title: "Article II: The Charter", content: "Outlines the establishment of chapters and the authority of the National Council." },
  { id: 3, title: "Article III: Aims and Objectives", content: "To promote brotherhood/sisterhood, scholarship, and righteousness." },
  { id: 4, title: "Article IV: Membership", content: "Qualifications for being a True Rhoan, including the 13 candidates requirement." },
  { id: 5, title: "Article V: Officers", content: "Roles including Grand Rhoan, Scroll, Coffer, Tribune, and Whip." }
];

const HISTORY_TIMELINE = [
  { year: "1965", event: "Founded at Lyceum of the Philippines by Atty. Rodrigo G. Roy and four companions with 18 men and 8 women." },
  { year: "1972", event: "Presidential Decree 1081 (Martial Law) banned student organizations; RHOANS continued activities underground." },
  { year: "2015", event: "50th Anniversary celebration and official ratification of the Constitution and By-Laws by the Founder." },
  { year: "2025", event: "Election and term start for the Palawan Council Officers." }
];

// --- Components ---

const Navbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'history', label: 'History', icon: History },
    { id: 'bylaws', label: 'By-Laws', icon: Scale },
    { id: 'council', label: 'Council', icon: Users },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-xl border-b border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="bg-red-600 p-2 rounded-full border-2 border-white">
              <Shield className="text-white h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tighter block leading-tight">A P Σ</span>
              <span className="text-xs text-red-500 font-bold uppercase tracking-widest">RHOANS 1965</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activePage === item.id ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white hover:bg-red-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-400 hover:text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-red-900 px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-in fade-in duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); setIsOpen(false); }}
              className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-red-600 hover:text-white"
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const HomeHero = ({ setPage }) => (
  <div className="relative overflow-hidden bg-red-700 text-white">
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
      <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase drop-shadow-2xl">
        Alpha Rho Sigma
      </h1>
      <p className="text-xl md:text-2xl font-light italic mb-8 max-w-2xl mx-auto opacity-90">
        "{MOTTO}"
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => setPage('history')}
          className="bg-black hover:bg-zinc-900 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 flex items-center gap-2 border border-red-500"
        >
          Our Heritage <History size={20} />
        </button>
        <button 
          onClick={() => setPage('bylaws')}
          className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 flex items-center gap-2"
        >
          Read By-Laws <Scroll size={20} />
        </button>
      </div>
    </div>
  </div>
);

const HistoryPage = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto">
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight border-b-4 border-red-600 inline-block pb-2">Our History</h2>
      <p className="text-gray-600 mt-4">Founded on {FOUNDING_DATE} at the Lyceum of the Philippines.</p>
    </div>
    
    <div className="space-y-8">
      {HISTORY_TIMELINE.map((item, index) => (
        <div key={index} className="flex gap-4 group">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              {item.year.slice(-2)}
            </div>
            <div className="w-1 h-full bg-red-200 mt-2"></div>
          </div>
          <div className="pb-8">
            <h3 className="text-xl font-bold text-gray-800">{item.year}</h3>
            <p className="text-gray-600 leading-relaxed mt-1">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ByLawsPage = () => (
  <div className="py-12 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase text-center">The Constitution & By-Laws</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {BYLAWS_PREVIEW.map((article) => (
        <div key={article.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 text-red-700 rounded-lg">
              <Scale size={20} />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{article.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{article.content}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 bg-zinc-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">Final Ratification</h3>
        <p className="text-gray-400 text-sm">Signed and Sealed by Founder Atty. Rodrigo G. Roy on April 16, 2015.</p>
      </div>
      <button className="md:ml-auto bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg flex items-center gap-2 font-bold transition-colors">
        Download Full PDF <ExternalLink size={18} />
      </button>
    </div>
  </div>
);

const CouncilPage = () => (
  <div className="py-12 px-4 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase">Palawan Council</h2>
      <p className="text-red-600 font-bold tracking-widest uppercase text-sm">Officers 2025 - 2026</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {COUNCIL_OFFICERS.map((officer, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group">
          <div className="h-2 bg-red-600 group-hover:h-4 transition-all"></div>
          <div className="p-6">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-1">{officer.role}</span>
            <h3 className="text-xl font-black text-gray-800">{officer.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-red-200">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {activePage === 'home' && (
          <>
            <HomeHero setPage={setActivePage} />
            <div className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Scholarship</h3>
                <p className="text-gray-600">Promoting academic excellence and continuous intellectual growth among all Rhoans.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Righteousness</h3>
                <p className="text-gray-600">Living with integrity and advocating for what is just in our communities.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Brotherhood</h3>
                <p className="text-gray-600">An unbreakable bond that spans generations, from 1965 to the future.</p>
              </div>
            </div>
          </>
        )}
        
        {activePage === 'history' && <HistoryPage />}
        {activePage === 'bylaws' && <ByLawsPage />}
        {activePage === 'council' && <CouncilPage />}
      </main>

      <footer className="bg-black text-white pt-16 pb-8 border-t-8 border-red-600 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <span className="text-3xl font-black border-2 border-red-600 px-3 py-1">A</span>
            <span className="text-3xl font-black border-2 border-red-600 px-3 py-1">P</span>
            <span className="text-3xl font-black border-2 border-red-600 px-3 py-1">Σ</span>
          </div>
          <p className="text-gray-400 mb-2 font-medium tracking-widest uppercase">Founded 1965 • Philippines</p>
          <p className="text-gray-600 text-sm max-w-md mx-auto mb-8 italic">"The Power and Magic of every Rhoan shall prevail..."</p>
          
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} Alpha Rho Sigma Fraternity and Sorority. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-500">Privacy Policy</a>
              <a href="#" className="hover:text-red-500">Terms of Use</a>
              <a href="#" className="hover:text-red-500">Member Login</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Dynamic Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}