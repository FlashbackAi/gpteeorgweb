import { useState, useEffect } from 'react';
import { CyberTerminal } from '../CyberTerminal';

interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  typingSpeed?: number;
  delayBetweenCommands?: number;
}

export function Terminal({
  commands,
  outputs = {},
  typingSpeed = 45,
  delayBetweenCommands = 1000,
}: TerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Handle typing effect
  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;

    const fullCommand = commands[currentCommandIndex];

    if (isTyping) {
      if (currentText.length < fullCommand.length) {
        const timeout = setTimeout(() => {
          setCurrentText(fullCommand.substring(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    } else {
      const timeout = setTimeout(() => {
        setCurrentCommandIndex((prev) => prev + 1);
        setCurrentText("");
        setIsTyping(true);
      }, delayBetweenCommands);
      return () => clearTimeout(timeout);
    }
  }, [currentText, isTyping, currentCommandIndex, commands, typingSpeed, delayBetweenCommands]);

  return (
    <CyberTerminal
      title="system_terminal"
      subtitle={`[auth_level_0] node_${currentCommandIndex}`}
      accentColor="#00f0ff"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', minHeight: '300px' }}>
        {commands.map((cmd, index) => {
          if (index > currentCommandIndex) return null;
          
          const isCurrent = index === currentCommandIndex;
          const displayCommand = isCurrent ? currentText : cmd;

          return (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff' }}>
                <span style={{ color: '#ff2d7b' }}>{'>'}</span>
                <span>{displayCommand}</span>
                {isCurrent && isTyping && (
                  <span
                    style={{
                      width: '8px',
                      height: '14px',
                      background: '#00f0ff',
                      display: 'inline-block',
                      animation: 'blink 1s step-end infinite',
                      marginLeft: '2px'
                    }}
                  />
                )}
              </div>
              
              {!isCurrent && outputs[index] && (
                <div style={{ color: '#a0a0b5', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {outputs[index].map((out, outIndex) => (
                    <div key={outIndex}>{out}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </CyberTerminal>
  );
}
