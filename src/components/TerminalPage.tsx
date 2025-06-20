import React, { useState, useEffect, useRef } from 'react';
import './TerminalPage.css';

type HistoryEntry = {
  prompt: string;
  output: string;
  isError?: boolean;
};

const commands: Record<string, string | (() => string)> = {
  'Oluwatito.currentLocation': '"Newark, Delaware"',
  'Oluwatito.contactInfo': '["opo@udel.edu", "LinkedIn", "GitHub"]',
  'Oluwatito.resume': '"olubakinde_resume.pdf"',
  'Oluwatito.hobbies': '["coding", "basketball", "gaming", "traveling", "weightlifting", "gardening"]',
  'Oluwatito.education': '"B.S. Computer Science - University of Delaware"',
  'Oluwatito.languages': '["Python", "Java", "JavaScript", "C", "C++", "Swift", "HTML", "CSS", "SQL"]',
  'Oluwatito.frameworks': '["React", "Next.js", "NumPy", "Pandas", "Flask", "Django", "Express", "GraphQL"]',
  'Oluwatito.technologies': '["Docker", "Git", "AWS", "Redis"]',
  help: () => `Available commands:\n${Object.keys(commands).join('\n')}`,
  ls: () => Object.keys(commands).join('\n'),
  date: () => new Date().toString(),
  banner: () => `
          ____  _       _           _    _           _      
        /  __ \\| |     | |         | |  (_)         | |     
        | |  | | |_   _| |__   __ _| | ___ _ __   __| | ___ 
        | |  | | | | | | '_ \\ / _  | |/ / |  _ \\ / _  |/ _ \\
        | |__| | | |_| | |_) | (_| |   <| | | | | (_| |  __/
        \\____/|_|\\__,_|_.__/ \\__,_|_|\\_\\_|_| |_|\\__,_|\\___|
`,
};

const initialCommands = ['help', 'banner'] as const;

const makeEntry = (cmd: string): HistoryEntry => {
  const def = commands[cmd];
  let output: string;
  if (typeof def === 'function') output = def();
  else if (typeof def === 'string') output = def;
  else output = `"${cmd}" is not recognized as a command.`;
  return { prompt: cmd, output, isError: def === undefined };
};

const TerminalPage: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>(
    initialCommands.map(makeEntry)
  );
  const [input, setInput] = useState('');
  const [pastInputs, setPastInputs] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history]);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  const runCommand = (cmd: string) => {
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    const def = commands[cmd];
    const isError = def === undefined;
    let output: string;
    if (typeof def === 'function') output = def();
    else if (typeof def === 'string') output = def;
    else output = `"${cmd}" is not recognized as a command.`;
    setHistory((h) => [...h, { prompt: cmd, output, isError }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = input.trim();
      if (!cmd) return;
      setPastInputs((p) => [...p, cmd]);
      setHistoryIndex(null);
      runCommand(cmd);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!pastInputs.length) return;
      const idx = historyIndex === null
        ? pastInputs.length - 1
        : Math.max(0, historyIndex - 1);
      setHistoryIndex(idx);
      setInput(pastInputs[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!pastInputs.length || historyIndex === null) {
        setInput('');
        setHistoryIndex(null);
        return;
      }
      const idx = historyIndex < pastInputs.length - 1
        ? historyIndex + 1
        : null;
      setHistoryIndex(idx);
      setInput(idx !== null ? pastInputs[idx] : '');
    }
  };

  return (
    <div className="hero-root">
      <main className="hero-main">
        <div className="hero-cli">
          <div className="term-header">
            <span className="circle red" />
            <span className="circle yellow" />
            <span className="circle green" />
          </div>
          <div className="term-body">
            {history.map((entry, i) => (
              <div className="term-line" key={i}>
                <span className="term-prompt">&gt; {entry.prompt}</span>
                <pre className={entry.isError ? 'term-error' : 'term-string'}>
                  {entry.output}
                </pre>
              </div>
            ))}
            <div className="term-line">
              <span className="term-prompt">&gt; </span>
              <input
                className="term-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                spellCheck="false"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TerminalPage;
