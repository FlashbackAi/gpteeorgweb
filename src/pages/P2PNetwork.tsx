import { useState } from 'react';
import { TerminalWindow } from '../components/TerminalWindow';

export const P2PNetwork = () => {
  const [activeTab, setActiveTab] = useState<'topology' | 'protocol' | 'logs'>('topology');

  return (
    <div className="w-full px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block px-4 py-2 border border-terminal-green-dim bg-terminal-black-light rounded text-sm font-mono text-terminal-green mb-6">
          INFRASTRUCTURE_OVERVIEW
        </div>
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-white">INFRASTRUCTURE </span>
          <span className="text-terminal-green glow-green-strong">P2P_CORE</span>
        </h1>
        <p className="text-terminal-grey-light text-lg max-w-3xl">
          Visualizing the backbone of the GPTEE decentralized mesh. This protocol facilitates
          zero-trust communication across geographically distributed sovereign nodes.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-8 border-b border-terminal-green-dim">
        <button
          onClick={() => setActiveTab('topology')}
          className={`px-6 py-3 font-mono transition-all ${
            activeTab === 'topology'
              ? 'text-terminal-green border-b-2 border-terminal-green'
              : 'text-terminal-grey hover:text-white'
          }`}
        >
          <span className="text-terminal-green mr-2">✧</span> NETWORK_TOPOLOGY
        </button>
        <button
          onClick={() => setActiveTab('protocol')}
          className={`px-6 py-3 font-mono transition-all ${
            activeTab === 'protocol'
              ? 'text-terminal-green border-b-2 border-terminal-green'
              : 'text-terminal-grey hover:text-white'
          }`}
        >
          <span className="text-terminal-green mr-2">⚡</span> PROTOCOL_INFO
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`px-6 py-3 font-mono transition-all ${
            activeTab === 'logs'
              ? 'text-terminal-green border-b-2 border-terminal-green'
              : 'text-terminal-grey hover:text-white'
          }`}
        >
          <span className="text-terminal-green mr-2">▤</span> SYSTEM_LOGS
        </button>
      </div>

      {/* Network Topology Tab */}
      {activeTab === 'topology' && (
        <div className="space-y-8">
          <TerminalWindow title="MODEL: REAL-TIME_MESH">
            <div className="font-mono text-sm text-terminal-grey p-4 bg-terminal-black rounded">
              <pre className="text-terminal-green">
{`[NODE_ROOT]──────────────────(SECURE_TUNNEL_01)
    │
    ├──[EU_VAL_01]
    │      ├──{ NODE_FR_04 }
    │      └──{ NODE_DE_09 }──────────────────────┐
    │                                             ↓
    ├──[US_VAL_02]                         [EDGE_RELAY_B]
    │      ├──{ NODE_CA_01 }                      │
    │      │                                      ├──[US_WEST_01]
    │      └──{ NODE_TX_07 }                      └──[US_EAST_02]
    │                                                   │
    └──[AS_VAL_03] <──────────────────────────────────[QUANTUM_LINK]`}
              </pre>
            </div>
          </TerminalWindow>

          {/* Network Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-terminal-black-light p-6 border border-terminal-green-dim rounded">
              <div className="text-6xl font-bold text-terminal-green mb-2">1,402</div>
              <div className="text-terminal-grey text-sm font-mono">ACTIVE NODES</div>
            </div>
            <div className="bg-terminal-black-light p-6 border border-terminal-green-dim rounded">
              <div className="text-6xl font-bold text-terminal-green mb-2">99.99%</div>
              <div className="text-terminal-grey text-sm font-mono">CONNECTIVITY</div>
            </div>
            <div className="bg-terminal-black-light p-6 border border-terminal-green-dim rounded">
              <div className="text-6xl font-bold text-terminal-green mb-2">P2P</div>
              <div className="text-terminal-grey text-sm font-mono">TOPOLOGY TYPE</div>
            </div>
          </div>

          {/* Traffic Metrics */}
          <div className="terminal-window p-6">
            <h3 className="text-terminal-green text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">≫</span> GLOBAL_TRAFFIC_METRICS
            </h3>
            <p className="text-terminal-grey text-sm mb-4">Ingress vs Egress throughput across all regional gateways.</p>

            <div className="space-y-4">
              {[
                { region: 'NA-02', ingress: 75, egress: 68, label: '01:00' },
                { region: 'EU-01', ingress: 90, egress: 85, label: '04:00' },
                { region: 'AS-03', ingress: 95, egress: 80, label: '07:00' },
                { region: 'SA-01', ingress: 85, egress: 78, label: '13:00' },
                { region: 'AF-02', ingress: 78, egress: 71, label: '16:00' },
                { region: 'OC-01', ingress: 92, egress: 88, label: '20:00' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 text-terminal-grey text-xs font-mono">{item.label}</div>
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1">
                      <div className="h-8 bg-terminal-green rounded" style={{ width: `${item.ingress}%` }}></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-8 bg-terminal-grey rounded" style={{ width: `${item.egress}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex gap-6 mt-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-terminal-green rounded"></div>
                  <span className="text-terminal-grey">INGRESS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-terminal-grey rounded"></div>
                  <span className="text-terminal-grey">EGRESS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Protocol Info Tab */}
      {activeTab === 'protocol' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TerminalWindow title="PROTOCOL_INFO">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-terminal-green font-bold mb-1">DESIGNATION</div>
                  <div className="text-white font-mono">GPTEE-P2P-v1.0</div>
                </div>
                <div>
                  <div className="text-terminal-green font-bold mb-1">ENCRYPTION STANDARD</div>
                  <div className="text-white font-mono">ChaCha20-Poly1305</div>
                </div>
                <div>
                  <div className="text-terminal-green font-bold mb-1">DISCOVERY ENGINE</div>
                  <div className="text-white font-mono">Kademlia DHT (Modified)</div>
                </div>
              </div>
            </TerminalWindow>

            <div className="bg-terminal-black-light p-6 border border-terminal-green-dim rounded">
              <h3 className="text-terminal-green text-lg font-bold mb-4">DOWNLOAD_SPEC.PDF</h3>
              <p className="text-terminal-grey text-sm mb-4">
                Complete technical specification including cryptographic proofs and network topology design.
              </p>
              <button className="w-full px-6 py-3 bg-terminal-green text-black font-bold hover:shadow-lg hover:shadow-terminal-green/50 transition-all">
                DOWNLOAD_SPEC.PDF
              </button>
            </div>
          </div>

          {/* Discovery Mechanism */}
          <div className="terminal-window p-6">
            <h3 className="text-terminal-green text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">✦</span> DISCOVERY_MECHANISM
            </h3>

            <div className="space-y-4 text-terminal-grey text-sm">
              <p>
                The peer discovery engine utilizes a recursive distributed hash table (DHT) lookup.
                Nodes announce their availability every <span className="text-terminal-green">120 seconds</span> to maintain
                a live registry without a central directory.
              </p>

              <div className="bg-terminal-black p-4 rounded border border-terminal-green-dim font-mono text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-terminal-green mb-1">DHT_BUCKET_SIZE</div>
                    <div className="text-white">K = 20</div>
                  </div>
                  <div>
                    <div className="text-terminal-green mb-1">REFRESH_RATE</div>
                    <div className="text-white">150ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Audit */}
          <div className="terminal-window p-6">
            <h3 className="text-terminal-green text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">🛡</span> SECURITY_AUDIT
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-terminal-green">[PASS]</span>
                <div className="text-terminal-grey">
                  Sybil attack mitigation via Proof-of-Stake (PoS) identity anchoring.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-terminal-green">[PASS]</span>
                <div className="text-terminal-grey">
                  Eclipse attack prevention through diverse IP verification.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-terminal-green">[PASS]</span>
                <div className="text-terminal-grey">
                  Quantum-resistant handshake protocol (Experimental v2.0).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* System Logs Tab */}
      {activeTab === 'logs' && (
        <TerminalWindow>
          <div className="font-mono text-xs space-y-1 text-terminal-grey max-h-96 overflow-y-auto">
            <div>[14:03:55] <span className="text-terminal-green">HANDSHAKE_OK:</span> Peer_7285</div>
            <div>[14:04:12] <span className="text-terminal-green">SYNC_START:</span> Block_19351</div>
            <div>[14:04:35] <span className="text-terminal-green">DHT_REFRESH:</span> 43 new peers</div>
            <div>[14:04:56] <span className="text-terminal-green">MONITORING_TRAFFIC...</span></div>
            <div>[14:05:15] <span className="text-yellow-500">DHT_LATENCY:</span> Peer_4920 timeout (retrying...)</div>
            <div>[14:05:33] <span className="text-terminal-green">HANDSHAKE_OK:</span> Peer_4920</div>
            <div>[14:05:47] <span className="text-terminal-green">MODEL_SYNC:</span> Checkpoint saved</div>
            <div>[14:06:02] <span className="text-terminal-green">INFERENCE_REQUEST:</span> Task_94712 queued</div>
            <div>[14:06:18] <span className="text-terminal-green">INFERENCE_COMPLETE:</span> Task_94712 (834ms)</div>
            <div>[14:06:35] <span className="text-terminal-green">DHT_REFRESH:</span> 47 new peers</div>
          </div>
        </TerminalWindow>
      )}
    </div>
  );
};
