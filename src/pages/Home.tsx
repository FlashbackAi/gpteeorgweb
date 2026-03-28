import { useState, useEffect } from 'react';
import { TerminalWindow } from '../components/TerminalWindow';
import { FeatureCard } from '../components/FeatureCard';

export const Home = () => {
  const [activeInstances, setActiveInstances] = useState(4921);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInstances(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Hero Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 border border-terminal-green-dim bg-terminal-black-light rounded text-sm font-mono text-terminal-green lowercase">
              protocol initiated // [auth_level_0]
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl font-bold lowercase">
                <span className="text-terminal-green glow-green-strong">gptee.org</span>
              </h1>
              <p className="text-xl text-terminal-grey-light">
                gpt for everyone, free<span className="terminal-cursor"></span>
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-terminal-green text-black font-bold hover:shadow-lg hover:shadow-terminal-green/50 transition-all duration-200 animate-glow lowercase">
                initialize node
              </button>
              <button className="px-6 py-3 border-2 border-terminal-green text-terminal-green font-bold hover:bg-terminal-green hover:text-black transition-all duration-200 lowercase">
                network explorer
              </button>
            </div>
          </div>

          {/* Right: Terminal Window */}
          <TerminalWindow
            title="active_instances"
            subtitle={`${activeInstances.toLocaleString()}`}
          >
            <div className="space-y-2 text-sm font-mono lowercase">
              <div className="text-terminal-grey flex items-center gap-2">
                <span className="text-terminal-green">01</span>
                <span className="animate-pulse">connecting to genesis-node-a...</span>
              </div>
              <div className="text-terminal-grey flex items-center gap-2">
                <span className="text-terminal-green">02</span>
                <span className="text-terminal-green">peer handshaking successful.</span>
              </div>
              <div className="text-terminal-grey flex items-center gap-2">
                <span className="text-terminal-green">03</span>
                <span className="animate-pulse">loading ai weights (decentralized shards)...</span>
              </div>
              <div className="text-terminal-grey flex items-center gap-2">
                <span className="text-terminal-green">04</span>
                <span className="text-terminal-green">gptee.org interface online.</span>
              </div>

              <div className="mt-4 pl-4 border-l-2 border-terminal-green py-2">
                <p className="text-terminal-green italic text-xs normal-case">
                  "decentralization is the only way to ensure ai<br />
                  remains a public utility."
                </p>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Decentralized Infrastructure */}
          <FeatureCard
            icon="network"
            title="decentralized ai infrastructure"
            description="gptee.org is a breakthrough in distributed computing. we operate on a peer-to-peer network where thousands of individual nodes contribute compute power to run massive ai models without a central authority or censorship."
            moduleId="001_core_infra"
            link="/p2p-network"
            linkText="read protocol"
          />

          {/* Community Powered */}
          <FeatureCard
            icon="community"
            title="community powered"
            description="every node in the network is owned and operated by individuals like you. no corporate gatekeepers, no proprietary black boxes."
            moduleId="002_community"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-terminal-black-light border border-terminal-green-dim rounded-lg hover:border-terminal-green transition-all duration-200">
            <div className="text-terminal-green text-3xl mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 lowercase">private by default</h3>
            <p className="text-terminal-grey-light text-sm lowercase">
              end-to-end encrypted requests ensure your data never touches a central server in plaintext.
            </p>
            <div className="mt-4 text-xs font-mono text-terminal-grey lowercase">
              module_id: <span className="text-terminal-green">privacy_001</span>
            </div>
          </div>

          <div className="p-6 bg-terminal-black-light border border-terminal-green-dim rounded-lg hover:border-terminal-green transition-all duration-200">
            <div className="text-terminal-green text-3xl mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 lowercase">high efficiency</h3>
            <p className="text-terminal-grey-light text-sm lowercase">
              optimized model sharding allows gptee to run effectively even on consumer-grade hardware.
            </p>
            <div className="mt-4 text-xs font-mono text-terminal-grey lowercase">
              module_id: <span className="text-terminal-green">efficiency_002</span>
            </div>
          </div>

          <div className="p-6 bg-terminal-black-light border border-terminal-green-dim rounded-lg hover:border-terminal-green transition-all duration-200">
            <div className="text-terminal-green text-3xl mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 lowercase">global scale</h3>
            <p className="text-terminal-grey-light text-sm lowercase">
              nodes distributed across 60+ countries ensure low latency and high availability worldwide.
            </p>
            <div className="mt-4 text-xs font-mono text-terminal-grey lowercase">
              module_id: <span className="text-terminal-green">scale_003</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="terminal-window p-8">
          <div className="terminal-dots mb-6">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-white lowercase">ready to join the network?</h2>

            <div className="bg-terminal-black p-6 rounded border border-terminal-green-dim font-mono text-left">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <span className="text-terminal-green">$</span>
                <div className="flex-1 break-all">
                  <span className="text-terminal-grey">curl -sSL https://get.gptee.org | bash</span>
                </div>
                <button className="px-4 py-2 bg-terminal-green text-black text-sm font-bold hover:shadow-lg hover:shadow-terminal-green/50 transition-all lowercase whitespace-nowrap">
                  execute
                </button>
              </div>
            </div>

            <p className="text-sm text-terminal-grey lowercase">
              supports linux, macos, and windows (wsl2)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
