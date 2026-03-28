import { TerminalWindow } from '../components/TerminalWindow';

export const PrivacyPolicy = () => {
  return (
    <div className="w-full px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Directory */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="terminal-window p-4">
              <div className="text-terminal-grey text-xs font-mono mb-3">DIRECTORY</div>
              <nav className="space-y-2 text-sm font-mono">
                <a href="#privacy" className="block text-terminal-green hover:glow-green transition-all">
                  01 PRIVACY_POLICY
                </a>
                <a href="#data-collection" className="block text-terminal-grey hover:text-terminal-green transition-all pl-4">
                  02 DATA_COLLECTION
                </a>
                <a href="#personal-id" className="block text-terminal-grey hover:text-terminal-green transition-all pl-4">
                  03 PERSONAL_ID
                </a>
                <a href="#zero-knowledge" className="block text-terminal-grey hover:text-terminal-green transition-all pl-4">
                  04 ZERO_KNOWLEDGE
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <TerminalWindow>
            <div className="space-y-8 font-mono">
              {/* Header */}
              <div className="border-b border-terminal-green-dim pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-terminal-grey">📄 GPTEE_LEGAL_DOCS_V1.0.SH</div>
                  <div className="text-xs text-terminal-green">READ-ONLY MODE</div>
                </div>
              </div>

              {/* Privacy Policy */}
              <section id="privacy">
                <h1 className="text-3xl font-bold text-terminal-green mb-6"># PRIVACY POLICY</h1>

                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    <span className="text-terminal-green">001</span> [SUMMARY] GPTEE.org values data sovereignty.
                    This document outlines how we process information within our neural-node infrastructure.
                  </p>
                </div>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">002 1.0 DATA COLLECTION PROTOCOLS</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    Our systems automatically harvest metadata necessary for P2P handshake stabilization.
                    This includes IP addresses, browser fingerprints, and operational telemetry.
                  </p>
                </div>
              </section>

              {/* Personal Identification */}
              <section id="personal-id" className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">003 1.1 PERSONAL IDENTIFICATION</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    GPTEE does not require real-world identities. All user profiles are hashed using SHA-256
                    upon creation. We do not store plain-text email addresses or names.
                  </p>
                </div>
              </section>

              {/* Zero-Knowledge Proofs */}
              <section id="zero-knowledge" className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">004 1.2 ZERO-KNOWLEDGE PROOFS</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    We implement <span className="text-terminal-green">Zero-Knowledge Proofs</span> for authentication,
                    ensuring that even our core administrators cannot access your decrypted communication logs.
                  </p>
                </div>
              </section>

              {/* Data Encryption */}
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">2.0 ENCRYPTION STANDARDS</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    All inference requests are encrypted end-to-end using ChaCha20-Poly1305. Your prompts
                    are never stored in plaintext on any server.
                  </p>

                  <div className="bg-terminal-black p-4 rounded border border-terminal-green-dim mt-4">
                    <div className="text-xs">
                      <div className="text-terminal-green mb-2">ENCRYPTION_SPEC:</div>
                      <div>• Algorithm: ChaCha20-Poly1305</div>
                      <div>• Key Exchange: X25519 (Curve25519)</div>
                      <div>• Forward Secrecy: Enabled</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">3.0 DATA RETENTION</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    System logs are retained for <span className="text-terminal-green">30 days</span> for debugging purposes.
                    After this period, all logs are permanently deleted from our infrastructure.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">4.0 CONTACT</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    For privacy inquiries, contact us at{' '}
                    <a href="mailto:privacy@gptee.org" className="text-terminal-green hover:glow-green">
                      privacy@gptee.org
                    </a>
                  </p>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-12 pt-6 border-t border-terminal-green-dim text-xs text-terminal-grey">
                <div className="text-terminal-green mb-2">[EOF-PRIVACY_POLICY]</div>
                Last Updated: March 28, 2026 | Version: 1.0.4
              </div>
            </div>
          </TerminalWindow>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-terminal-black-light p-6 border border-terminal-green-dim rounded">
              <div className="text-terminal-green text-2xl mb-3">📧 LEGAL INQUIRIES</div>
              <p className="text-terminal-grey text-sm mb-4">
                Contact our automated compliance bot for specific regulatory requests.
              </p>
              <button className="px-6 py-2 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all font-bold">
                OPEN CHANNEL
              </button>
            </div>

            <div className="bg-terminal-black-light p-6 border border-terminal-green-dim rounded">
              <div className="text-terminal-green text-2xl mb-3">📊 DATA EXPORT</div>
              <p className="text-terminal-grey text-sm mb-4">
                Download your hashed activity log in .JSON format for local audit.
              </p>
              <button className="px-6 py-2 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all font-bold">
                INITIATE EXPORT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
