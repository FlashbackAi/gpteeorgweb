import { useState, useEffect } from 'react';
import { CyberTerminal } from '../components/CyberTerminal';
import { ScrollReveal } from '../components/ScrollReveal';
import { ParticleNetwork } from '../components/ParticleNetwork';

interface NodeData {
  peerId: string;
  name: string;
  status: 'ACTIVE' | 'REBOOTING' | 'OFFLINE';
  uptime: string;
  latency: string;
  bandwidth: string;
}

const generateMockNodes = (): NodeData[] => {
  const statuses: ('ACTIVE' | 'REBOOTING' | 'OFFLINE')[] = ['ACTIVE', 'ACTIVE', 'ACTIVE', 'ACTIVE', 'REBOOTING', 'OFFLINE'];
  const names = ['CYBER_PHANTOM_01', 'NEON_VOID_STATION', 'NULL_POINTER_ARCH', 'GHOST_SHELL_99', 'BIT_CRUSHER_MK1', 'QUANTUM_FORGE_7'];

  return Array.from({ length: 5 }, (_, i) => ({
    peerId: `0x${Math.random().toString(16).substring(2, 6).toUpperCase()}...${Math.random().toString(16).substring(2, 6).toUpperCase()}`,
    name: names[i] || `NODE_${i}`,
    status: statuses[i],
    uptime: `${Math.floor(Math.random() * 120)}d ${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
    latency: `${Math.floor(Math.random() * 100)}ms`,
    bandwidth: `${(Math.random() * 10).toFixed(1)} Gbps`,
  }));
};

export const Nodes = () => {
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [totalNodes, setTotalNodes] = useState(1024);
  const [commandInput, setCommandInput] = useState('');

  useEffect(() => {
    setNodes(generateMockNodes());
    const interval = setInterval(() => {
      setTotalNodes(prev => prev + Math.floor(Math.random() * 2));
      setNodes(generateMockNodes());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'ACTIVE': return { color: '#b8ff00', dot: '#b8ff00', glow: 'rgba(184,255,0,0.4)' };
      case 'REBOOTING': return { color: '#ffbd2e', dot: '#ffbd2e', glow: 'rgba(255,189,46,0.4)' };
      case 'OFFLINE': return { color: '#ff5f56', dot: '#ff5f56', glow: 'rgba(255,95,86,0.4)' };
      default: return { color: '#888899', dot: '#888899', glow: 'transparent' };
    }
  };

  return (
    <div style={{ paddingTop: '100px', position: 'relative', minHeight: '100vh' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.15, pointerEvents: 'none' }}>
        <ParticleNetwork particleCount={25} speed={0.2} connectionDistance={100} colors={['#ff2d7b30', '#00f0ff20']} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px', position: 'relative', zIndex: 1 }}>
        {/* Stats Overview */}
        <ScrollReveal animation="fadeUp">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}>
            {[
              { label: 'Network Health', color: '#b8ff00' },
              { label: 'Total Nodes', color: '#ff2d7b' },
              { label: 'Traffic (24h)', color: '#00f0ff' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(18,16,26,0.7)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${stat.color}20`,
                  borderLeft: `3px solid ${stat.color}`,
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#888899', marginBottom: '8px', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
                <div style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: stat.color,
                  textShadow: `0 0 15px ${stat.color}40`,
                }}>
                  {i === 0 ? '99.98%' : i === 1 ? totalNodes.toLocaleString() : '8.42 PB'}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: stat.color, marginTop: '4px', opacity: 0.7 }}>
                  {i === 0 ? 'UPTIME_INDEX' : i === 1 ? 'ACTIVE_PEERS' : 'TX_STREAMS'}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Nodes Table */}
        <ScrollReveal animation="fadeUp" delay={200}>
          <CyberTerminal title="GPTEE_NODES_MONITOR" subtitle="--VERBOSE" accentColor="#ff2d7b">
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,45,123,0.15)' }}>
                    {['PEERID', 'NAME', 'STATUS', 'UPTIME', 'LATENCY', 'BANDWIDTH'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '12px 16px', color: '#888899', fontWeight: 400, fontSize: '10px', letterSpacing: '0.1em' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {nodes.map((node, index) => {
                    const statusStyle = getStatusStyles(node.status);
                    return (
                      <tr
                        key={index}
                        style={{
                          borderBottom: '1px solid rgba(255,255,255,0.03)',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,45,123,0.03)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                      >
                        <td style={{ padding: '12px 16px', color: '#ff2d7b' }}>{node.peerId}</td>
                        <td style={{ padding: '12px 16px', color: '#fff' }}>{node.name}</td>
                        <td style={{ padding: '12px 16px', color: statusStyle.color }}>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                          }}>
                            <span style={{
                              width: '6px', height: '6px', borderRadius: '50%',
                              background: statusStyle.dot,
                              boxShadow: `0 0 6px ${statusStyle.glow}`,
                            }} />
                            {node.status}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px', color: '#888899' }}>{node.uptime}</td>
                        <td style={{ padding: '12px 16px', color: '#888899' }}>{node.latency}</td>
                        <td style={{ padding: '12px 16px', color: '#888899' }}>{node.bandwidth}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginTop: '16px', fontSize: '10px', color: '#888899', fontFamily: 'JetBrains Mono, monospace',
              }}>
                <span>TOTAL ENTRIES: {totalNodes.toLocaleString()}</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ padding: '4px 12px', border: '1px solid rgba(255,45,123,0.2)', background: 'transparent', color: '#ff2d7b', cursor: 'pointer', fontSize: '10px' }}>&lt;</button>
                  <span style={{ padding: '4px 8px' }}>PAGE [01] OF [6x]</span>
                  <button style={{ padding: '4px 12px', border: '1px solid rgba(255,45,123,0.2)', background: 'transparent', color: '#ff2d7b', cursor: 'pointer', fontSize: '10px' }}>&gt;</button>
                </div>
              </div>
            </div>
          </CyberTerminal>
        </ScrollReveal>

        {/* Command Terminal */}
        <ScrollReveal animation="fadeUp" delay={300}>
          <div
            style={{
              marginTop: '32px',
              background: 'rgba(10,10,15,0.9)',
              border: '1px solid rgba(255,45,123,0.1)',
              borderRadius: '8px',
              padding: '20px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#ff2d7b', fontWeight: 700 }}>system@gptee.org:~$</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="ENTER_COMMAND_TO_QUERY_NODE..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#a0a0b5',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                }}
              />
              <span className="terminal-cursor" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
