import { useState } from 'react';
import { CyberTerminal } from '../components/CyberTerminal';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlitchText } from '../components/reactbits/GlitchText';
import { NeonButton } from '../components/NeonButton';
import { Aurora } from '../components/reactbits/Aurora';

export const P2PNetwork = () => {
  const [activeTab, setActiveTab] = useState<'topology' | 'protocol' | 'logs'>('topology');

  const tabs = [
    { id: 'topology' as const, label: 'NETWORK_TOPOLOGY', icon: '✧', color: '#ff2d7b' },
    { id: 'protocol' as const, label: 'PROTOCOL_INFO', icon: '⚡', color: '#00f0ff' },
    { id: 'logs' as const, label: 'SYSTEM_LOGS', icon: '▤', color: '#a855f7' },
  ];

  return (
    <div style={{ paddingTop: '100px', position: 'relative', minHeight: '100vh' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.15 }}>
        <Aurora colors={['#ff2d7b', '#0a0a2f', '#a855f7']} speed={0.5} opacity={0.15} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <ScrollReveal animation="fadeUp">
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'inline-flex', padding: '6px 16px', borderRadius: '20px',
              border: '1px solid rgba(0,240,255,0.2)', background: 'rgba(0,240,255,0.05)',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00f0ff',
              marginBottom: '20px',
            }}>
              INFRASTRUCTURE_OVERVIEW
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '16px' }}>
              <span style={{ color: '#fff', fontFamily: 'Orbitron, sans-serif' }}>INFRASTRUCTURE </span>
              <GlitchText text="P2P_CORE" className="text-cyber-magenta" as="span" />
            </h1>
            <p style={{ color: '#a0a0b5', fontSize: '15px', maxWidth: '700px', lineHeight: 1.7, textTransform: 'lowercase' }}>
              visualizing the backbone of the gptee decentralized mesh. this protocol facilitates
              zero-trust communication across geographically distributed sovereign nodes.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal animation="fadeUp" delay={100}>
          <div style={{
            display: 'flex', gap: '4px', marginBottom: '32px',
            borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0',
            flexWrap: 'wrap',
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 24px',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  background: activeTab === tab.id ? 'rgba(255,45,123,0.08)' : 'transparent',
                  color: activeTab === tab.id ? tab.color : '#888899',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? `2px solid ${tab.color}` : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ marginRight: '8px' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Network Topology Tab */}
        {activeTab === 'topology' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <ScrollReveal animation="fadeUp">
              <CyberTerminal title="MODEL" subtitle="REAL-TIME_MESH" accentColor="#ff2d7b">
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#b8ff00',
                  padding: '16px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px',
                  overflowX: 'auto', whiteSpace: 'pre',
                }}>
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
    └──[AS_VAL_03] ◄──────────────────────────────────[QUANTUM_LINK]`}
                </div>
              </CyberTerminal>
            </ScrollReveal>

            {/* Network Stats */}
            <ScrollReveal animation="fadeUp" delay={150}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {[
                  { value: '1,402', label: 'ACTIVE NODES', color: '#ff2d7b' },
                  { value: '99.99%', label: 'CONNECTIVITY', color: '#00f0ff' },
                  { value: 'P2P', label: 'TOPOLOGY TYPE', color: '#a855f7' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(18,16,26,0.7)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${stat.color}15`,
                      borderRadius: '8px',
                      padding: '28px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{
                      fontFamily: 'Orbitron, sans-serif', fontSize: '2.2rem', fontWeight: 800,
                      color: stat.color, textShadow: `0 0 20px ${stat.color}40`, marginBottom: '8px',
                    }}>{stat.value}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#888899', letterSpacing: '0.15em' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Traffic Metrics */}
            <ScrollReveal animation="fadeUp" delay={300}>
              <CyberTerminal title="GLOBAL_TRAFFIC_METRICS" accentColor="#00f0ff">
                <p style={{ color: '#888899', fontSize: '12px', marginBottom: '20px', fontFamily: 'JetBrains Mono, monospace' }}>
                  Ingress vs Egress throughput across all regional gateways.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { region: 'NA-02', ingress: 75, egress: 68, label: '01:00' },
                    { region: 'EU-01', ingress: 90, egress: 85, label: '04:00' },
                    { region: 'AS-03', ingress: 95, egress: 80, label: '07:00' },
                    { region: 'SA-01', ingress: 85, egress: 78, label: '13:00' },
                    { region: 'AF-02', ingress: 78, egress: 71, label: '16:00' },
                    { region: 'OC-01', ingress: 92, egress: 88, label: '20:00' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '50px', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#888899' }}>{item.label}</div>
                      <div style={{ flex: 1, display: 'flex', gap: '4px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            height: '24px', borderRadius: '3px', width: `${item.ingress}%`,
                            background: 'linear-gradient(90deg, #ff2d7b, #ff2d7b80)',
                            boxShadow: '0 0 8px rgba(255,45,123,0.2)',
                          }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            height: '24px', borderRadius: '3px', width: `${item.egress}%`,
                            background: 'linear-gradient(90deg, #888899, #88889960)',
                          }} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: '24px', marginTop: '8px', fontSize: '10px', fontFamily: 'JetBrains Mono, monospace' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: '#ff2d7b' }} />
                      <span style={{ color: '#888899' }}>INGRESS</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: '#888899' }} />
                      <span style={{ color: '#888899' }}>EGRESS</span>
                    </span>
                  </div>
                </div>
              </CyberTerminal>
            </ScrollReveal>
          </div>
        )}

        {/* Protocol Info Tab */}
        {activeTab === 'protocol' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
              <ScrollReveal animation="fadeLeft">
                <CyberTerminal title="PROTOCOL_INFO" accentColor="#00f0ff">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '13px' }}>
                    {[
                      { label: 'DESIGNATION', value: 'GPTEE-P2P-v1.0', color: '#ff2d7b' },
                      { label: 'ENCRYPTION STANDARD', value: 'ChaCha20-Poly1305', color: '#00f0ff' },
                      { label: 'DISCOVERY ENGINE', value: 'Kademlia DHT (Modified)', color: '#a855f7' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: item.color, fontWeight: 700, letterSpacing: '0.15em', marginBottom: '4px' }}>
                          {item.label}
                        </div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#fff' }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </CyberTerminal>
              </ScrollReveal>

              <ScrollReveal animation="fadeRight">
                <div style={{
                  background: 'rgba(18,16,26,0.7)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,240,255,0.15)', borderRadius: '8px', padding: '28px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px',
                }}>
                  <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '14px', fontWeight: 700, color: '#00f0ff' }}>
                    DOWNLOAD_SPEC.PDF
                  </h3>
                  <p style={{ color: '#a0a0b5', fontSize: '13px', lineHeight: 1.7 }}>
                    Complete technical specification including cryptographic proofs and network topology design.
                  </p>
                  <NeonButton variant="cyan" size="md">
                    Download Specification
                  </NeonButton>
                </div>
              </ScrollReveal>
            </div>

            {/* Discovery Mechanism */}
            <ScrollReveal animation="fadeUp" delay={200}>
              <CyberTerminal title="DISCOVERY_MECHANISM" accentColor="#a855f7">
                <div style={{ fontSize: '13px', color: '#a0a0b5', lineHeight: 1.7 }}>
                  <p style={{ marginBottom: '16px' }}>
                    The peer discovery engine utilizes a recursive distributed hash table (DHT) lookup.
                    Nodes announce their availability every <span style={{ color: '#b8ff00' }}>120 seconds</span> to maintain
                    a live registry without a central directory.
                  </p>
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px',
                    background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '6px',
                    border: '1px solid rgba(168,85,247,0.1)',
                  }}>
                    {[
                      { label: 'DHT_BUCKET_SIZE', value: 'K = 20' },
                      { label: 'REFRESH_RATE', value: '150ms' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#a855f7', marginBottom: '4px' }}>{item.label}</div>
                        <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 700 }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CyberTerminal>
            </ScrollReveal>

            {/* Security Audit */}
            <ScrollReveal animation="fadeUp" delay={300}>
              <CyberTerminal title="SECURITY_AUDIT" accentColor="#b8ff00">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                  {[
                    'Sybil attack mitigation via Proof-of-Stake (PoS) identity anchoring.',
                    'Eclipse attack prevention through diverse IP verification.',
                    'Quantum-resistant handshake protocol (Experimental v2.0).',
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#b8ff00', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>[PASS]</span>
                      <span style={{ color: '#a0a0b5' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </CyberTerminal>
            </ScrollReveal>
          </div>
        )}

        {/* System Logs Tab */}
        {activeTab === 'logs' && (
          <ScrollReveal animation="fadeUp">
            <CyberTerminal title="SYSTEM_LOGS" subtitle="LIVE" accentColor="#a855f7">
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                display: 'flex', flexDirection: 'column', gap: '6px',
                maxHeight: '400px', overflowY: 'auto',
              }}>
                {[
                  { time: '14:03:55', type: 'HANDSHAKE_OK', detail: 'Peer_7285', color: '#b8ff00' },
                  { time: '14:04:12', type: 'SYNC_START', detail: 'Block_19351', color: '#b8ff00' },
                  { time: '14:04:35', type: 'DHT_REFRESH', detail: '43 new peers', color: '#00f0ff' },
                  { time: '14:04:56', type: 'MONITORING_TRAFFIC', detail: '...', color: '#00f0ff' },
                  { time: '14:05:15', type: 'DHT_LATENCY', detail: 'Peer_4920 timeout (retrying...)', color: '#ffbd2e' },
                  { time: '14:05:33', type: 'HANDSHAKE_OK', detail: 'Peer_4920', color: '#b8ff00' },
                  { time: '14:05:47', type: 'MODEL_SYNC', detail: 'Checkpoint saved', color: '#b8ff00' },
                  { time: '14:06:02', type: 'INFERENCE_REQUEST', detail: 'Task_94712 queued', color: '#a855f7' },
                  { time: '14:06:18', type: 'INFERENCE_COMPLETE', detail: 'Task_94712 (834ms)', color: '#b8ff00' },
                  { time: '14:06:35', type: 'DHT_REFRESH', detail: '47 new peers', color: '#00f0ff' },
                ].map((log, i) => (
                  <div key={i} style={{ color: '#888899' }}>
                    <span style={{ color: '#555566' }}>[{log.time}]</span>{' '}
                    <span style={{ color: log.color, fontWeight: 600 }}>{log.type}:</span>{' '}
                    {log.detail}
                  </div>
                ))}
              </div>
            </CyberTerminal>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};
