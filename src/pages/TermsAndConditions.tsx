import { TerminalWindow } from '../components/TerminalWindow';

export const TermsAndConditions = () => {
  return (
    <div className="w-full px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Directory */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="terminal-window p-4">
              <div className="text-terminal-grey text-xs font-mono mb-3">DIRECTORY</div>
              <nav className="space-y-2 text-sm font-mono">
                <a href="#terms" className="block text-terminal-green hover:glow-green transition-all">
                  01 TERMS_OF_SERVICE
                </a>
                <a href="#acceptable-use" className="block text-terminal-grey hover:text-terminal-green transition-all pl-4">
                  02 ACCEPTABLE_USE
                </a>
                <a href="#node-operators" className="block text-terminal-grey hover:text-terminal-green transition-all pl-4">
                  03 NODE_OPERATORS
                </a>
                <a href="#liability" className="block text-terminal-grey hover:text-terminal-green transition-all pl-4">
                  04 LIABILITY
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
                  <div className="text-xs text-terminal-grey">📋 GPTEE_TERMS_V1.0.SH</div>
                  <div className="text-xs text-terminal-green">READ-ONLY MODE</div>
                </div>
              </div>

              {/* Terms of Service */}
              <section id="terms">
                <h1 className="text-3xl font-bold text-terminal-green mb-6"># TERMS OF SERVICE</h1>

                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    <span className="text-terminal-green">101</span> By accessing the{' '}
                    <span className="text-terminal-green">GPTEE_CORE_NETWORK</span>, you agree to abide by
                    the digital brutalist ethics of decentralized compute.
                  </p>
                </div>
              </section>

              {/* Acceptable Use */}
              <section id="acceptable-use" className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">102 2.0 ACCEPTABLE USE MATRIX</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>You may NOT use GPTEE for:</p>

                  <div className="bg-terminal-black p-4 rounded border border-terminal-green-dim">
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500">✗</span>
                        <span>Generating malware, exploits, or harmful code</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500">✗</span>
                        <span>Mass surveillance or privacy-violating activities</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500">✗</span>
                        <span>Disseminating illegal content or hate speech</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500">✗</span>
                        <span>DDoS attacks or network disruption</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4">You MAY use GPTEE for:</p>

                  <div className="bg-terminal-black p-4 rounded border border-terminal-green-dim">
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-3">
                        <span className="text-terminal-green">✓</span>
                        <span>Private AI inference and research</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-terminal-green">✓</span>
                        <span>Educational purposes and learning</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-terminal-green">✓</span>
                        <span>Creative writing and content generation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-terminal-green">✓</span>
                        <span>Code development and debugging</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Node Operators */}
              <section id="node-operators" className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">103 3.0 NODE OPERATOR RESPONSIBILITIES</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    By running a GPTEE node, you agree to:
                  </p>

                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Maintain minimum uptime of 95% for provider nodes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Process inference requests in good faith</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Not tamper with encrypted data streams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Report security vulnerabilities responsibly</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Rewards */}
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">4.0 COMPUTE REWARDS</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    Provider nodes earn rewards based on tokens generated and uptime. Rewards are
                    distributed via smart contracts on the Solana blockchain.
                  </p>

                  <div className="bg-terminal-black p-4 rounded border border-terminal-green-dim mt-4">
                    <div className="text-xs">
                      <div className="text-terminal-green mb-2">REWARD_CALCULATION:</div>
                      <div className="font-mono">
                        reward = (tokens_generated × 0.001) + (uptime_bonus × 0.5)
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Liability */}
              <section id="liability" className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">5.0 LIABILITY LIMITATIONS</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    GPTEE.ORG is provided "AS IS" without warranties. We are not liable for:
                  </p>

                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Network downtime or service interruptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Loss of rewards due to node misconfiguration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Content generated by the AI models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terminal-green">•</span>
                      <span>Actions of third-party node operators</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Termination */}
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">6.0 TERMINATION</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    We reserve the right to ban nodes that violate these terms. Banned nodes
                    will be blacklisted from the DHT and forfeit all pending rewards.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-terminal-green mb-4">7.0 GOVERNING LAW</h2>
                <div className="space-y-4 text-terminal-grey text-sm leading-relaxed">
                  <p>
                    These terms are governed by the laws of decentralized autonomous organizations
                    and international internet law where applicable.
                  </p>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-12 pt-6 border-t border-terminal-green-dim text-xs text-terminal-grey">
                <div className="text-terminal-green mb-2">[EOF-TERMS_OF_SERVICE]</div>
                Last Updated: March 28, 2026 | Version: 1.0.4
              </div>
            </div>
          </TerminalWindow>

          {/* Action Card */}
          <div className="mt-8 bg-terminal-black-light p-6 border border-terminal-green-dim rounded">
            <div className="text-terminal-green text-2xl mb-3">⚖ DISPUTE RESOLUTION</div>
            <p className="text-terminal-grey text-sm mb-4">
              For disputes, contact our decentralized arbitration DAO for peer-mediated resolution.
            </p>
            <button className="px-6 py-2 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all font-bold">
              SUBMIT DISPUTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
