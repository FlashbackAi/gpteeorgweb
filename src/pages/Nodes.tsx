import { useState, useEffect } from 'react';
import { TerminalWindow } from '../components/TerminalWindow';

interface NodeData {
  peerId: string;
  name: string;
  status: 'ACTIVE' | 'REBOOTING' | 'OFFLINE';
  uptime: string;
  latency: string;
  bandwidth: string;
}

// Mock data - will be replaced with AWS DynamoDB later
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
  const networkHealth = '99.98%';
  const traffic24h = '8.42 PB';
  const [commandInput, setCommandInput] = useState('');

  useEffect(() => {
    // Load initial nodes
    const initialNodes = generateMockNodes();
    setNodes(initialNodes);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setTotalNodes(prev => prev + Math.floor(Math.random() * 2));
      setNodes(generateMockNodes());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'text-terminal-green';
      case 'REBOOTING':
        return 'text-yellow-500';
      case 'OFFLINE':
        return 'text-red-500';
      default:
        return 'text-terminal-grey';
    }
  };

  const getStatusDot = (status: string) => {
    const color = getStatusColor(status).replace('text-', 'bg-');
    return <span className={`inline-block w-2 h-2 rounded-full ${color} mr-2`}></span>;
  };

  return (
    <div className="w-full px-6 py-12 max-w-7xl mx-auto">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-terminal-black-light border-l-4 border-terminal-green p-6">
          <div className="text-terminal-grey text-sm font-mono mb-2">NETWORK HEALTH</div>
          <div className="text-5xl font-bold text-terminal-green">{networkHealth}</div>
          <div className="text-xs text-terminal-grey mt-2 font-mono">UPTIME_INDEX</div>
        </div>

        <div className="bg-terminal-black-light border-l-4 border-terminal-green p-6">
          <div className="text-terminal-grey text-sm font-mono mb-2">TOTAL NODES</div>
          <div className="text-5xl font-bold text-white">{totalNodes.toLocaleString()}</div>
          <div className="text-xs text-terminal-green mt-2 font-mono">ACTIVE_PEERS</div>
        </div>

        <div className="bg-terminal-black-light border-l-4 border-terminal-green p-6">
          <div className="text-terminal-grey text-sm font-mono mb-2">TRAFFIC (24H)</div>
          <div className="text-5xl font-bold text-white">{traffic24h}</div>
          <div className="text-xs text-terminal-grey mt-2 font-mono">TX_STREAMS</div>
        </div>
      </div>

      {/* Nodes Table */}
      <TerminalWindow title="GPTEE_NODES_MONITOR --VERBOSE">
        <div className="overflow-x-auto">
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="border-b border-terminal-green-dim">
                <th className="text-left py-3 px-4 text-terminal-grey font-normal">PEERID</th>
                <th className="text-left py-3 px-4 text-terminal-grey font-normal">NAME</th>
                <th className="text-left py-3 px-4 text-terminal-grey font-normal">STATUS</th>
                <th className="text-left py-3 px-4 text-terminal-grey font-normal">UPTIME</th>
                <th className="text-left py-3 px-4 text-terminal-grey font-normal">LATENCY</th>
                <th className="text-left py-3 px-4 text-terminal-grey font-normal">BANDWIDTH</th>
                <th className="text-left py-3 px-4 text-terminal-grey font-normal">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {nodes.map((node, index) => (
                <tr
                  key={index}
                  className="border-b border-terminal-black-lighter hover:bg-terminal-black-light transition-colors"
                >
                  <td className="py-3 px-4 text-terminal-green">{node.peerId}</td>
                  <td className="py-3 px-4 text-white">{node.name}</td>
                  <td className={`py-3 px-4 ${getStatusColor(node.status)}`}>
                    <div className="flex items-center">
                      {getStatusDot(node.status)}
                      {node.status}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-terminal-grey">{node.uptime}</td>
                  <td className="py-3 px-4 text-terminal-grey">{node.latency}</td>
                  <td className="py-3 px-4 text-terminal-grey">{node.bandwidth}</td>
                  <td className="py-3 px-4">
                    <button className="text-terminal-green hover:glow-green transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between mt-6 text-xs text-terminal-grey">
            <div>TOTAL ENTRIES: {totalNodes.toLocaleString()}</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-terminal-green-dim hover:border-terminal-green transition-colors">
                &lt;
              </button>
              <span className="px-3 py-1">PAGE [01] OF [6x]</span>
              <button className="px-3 py-1 border border-terminal-green-dim hover:border-terminal-green transition-colors">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </TerminalWindow>

      {/* Command Terminal */}
      <div className="mt-8 bg-terminal-black p-6 rounded border border-terminal-green-dim font-mono">
        <div className="flex items-center gap-3">
          <span className="text-terminal-green">system@gptee_core:~$</span>
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            placeholder="ENTER_COMMAND_TO_QUERY_NODE..."
            className="flex-1 bg-transparent border-none outline-none text-terminal-grey placeholder-terminal-grey/50"
          />
          <span className="text-terminal-green animate-terminal-blink">▊</span>
        </div>
      </div>
    </div>
  );
};
