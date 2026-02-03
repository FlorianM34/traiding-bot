import React, { useState } from 'react';
import { Terminal, Globe, TrendingUp, Shield, ChevronRight, Activity, Cpu } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-lg flex items-center justify-center">
              <Terminal size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Geo<span className="text-cyan-400">Alpha</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Technologie</a>
            <a href="#metrics" className="hover:text-cyan-400 transition-colors">Performance</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Accès</a>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all border border-white/10">
            Connexion
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Abstract Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Moteur LLM v2.4 En ligne
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Transformez le chaos géopolitique en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
              Alpha Pur.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Notre IA analyse des millions de sources d'actualités mondiales en temps réel pour prédire les mouvements de marché avant qu'ils ne se produisent.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.7)]">
              <span className="flex items-center gap-2">
                Commencer l'Essai
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full font-medium transition-all">
              Voir la Démo Live
            </button>
          </div>
        </div>
      </section>

      {/* --- UI MOCKUP / DASHBOARD PEEK --- */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto bg-slate-900/50 border border-white/10 rounded-xl p-2 backdrop-blur-sm shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/5 to-transparent rounded-xl pointer-events-none"></div>
          {/* Mockup Header */}
          <div className="h-8 flex items-center gap-2 px-4 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          {/* Mockup Content Placeholders */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 space-y-4">
              <div className="h-48 bg-slate-800/50 rounded-lg animate-pulse border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-sm font-mono">
                  [Analyse Graphique Temps Réel]
                </div>
              </div>
              <div className="h-24 bg-slate-800/50 rounded-lg border border-white/5 p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 uppercase">Signal Détecté</div>
                  <div className="text-white font-bold text-lg">Tensions Mer de Chine</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Impact Prévu</div>
                  <div className="text-green-400 font-bold font-mono">+4.2% (Semiconducteurs)</div>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-slate-800/30 rounded-lg border border-white/5 p-4">
              <div className="text-xs text-slate-500 uppercase mb-4">Flux Live LLM</div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-xs border-l-2 border-indigo-500 pl-3 py-1">
                    <span className="text-indigo-400 font-mono">12:0{i}:45</span>
                    <p className="text-slate-300 mt-1">Analyse du discours terminée. Sentiment: <span className="text-red-400">Bearish</span> sur EUR/USD.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="text-cyan-400" size={32} />}
              title="Scanner Global"
              desc="Surveillance de 50+ langues. Nous lisons la presse locale avant que les médias internationaux ne traduisent."
            />
            <FeatureCard
              icon={<Cpu className="text-purple-400" size={32} />}
              title="LLM Contextuel"
              desc="Notre modèle ne fait pas que lire, il comprend les nuances diplomatiques et les menaces implicites."
            />
            <FeatureCard
              icon={<TrendingUp className="text-green-400" size={32} />}
              title="Exécution Ultra-Rapide"
              desc="De l'analyse de la news à l'ordre d'achat en moins de 400ms. Battez le marché humain."
            />
          </div>
        </div>
      </section>

      {/* --- METRICS / TRUST --- */}
      <section className="py-24 px-6 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Performance Backtestée (2020-2024)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number="+142%" label="ROI Annuel Moyen" />
            <Stat number="0.4s" label="Latence d'Analyse" />
            <Stat number="89%" label="Précision Tendance" />
            <Stat number="$2M+" label="Volume Traité/Jour" />
          </div>
        </div>
      </section>

      {/* --- CTA / FOOTER --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à trader le futur ?</h2>
          <p className="text-slate-400 mb-8">Rejoignez la liste d'attente pour l'accès bêta. Places limitées.</p>

          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all">
              Demander l'accès
            </button>
          </form>
          <p className="text-xs text-slate-600 mt-4">Aucune carte requise. Accès API disponible.</p>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 bg-slate-950">
        <p>&copy; 2024 GeoAlpha Trading Systems. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

// Composants utilitaires pour garder le code propre
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-white/[0.07] group">
    <div className="mb-4 p-3 bg-slate-950 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300 border border-white/10">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const Stat = ({ number, label }) => (
  <div>
    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">
      {number}
    </div>
    <div className="text-sm font-medium text-cyan-500 uppercase tracking-widest">{label}</div>
  </div>
);

export default App;