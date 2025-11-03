import React, { useEffect, useRef, useState } from 'react';
import { Bot, Mic, Send } from 'lucide-react';

const LANGUAGES = [
  { code: 'en-IN', label: 'English (India)' },
  { code: 'hi-IN', label: 'Hindi' },
  { code: 'bn-IN', label: 'Bengali' },
  { code: 'ta-IN', label: 'Tamil' },
  { code: 'te-IN', label: 'Telugu' },
  { code: 'mr-IN', label: 'Marathi' },
  { code: 'gu-IN', label: 'Gujarati' },
  { code: 'kn-IN', label: 'Kannada' },
  { code: 'ml-IN', label: 'Malayalam' },
  { code: 'pa-IN', label: 'Punjabi' },
  { code: 'ur-IN', label: 'Urdu' },
];

export default function YuktiBot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Yukti — your sustainability copilot. Ask me about jobs, verification, or learning.' },
  ]);
  const [lang, setLang] = useState('en-IN');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (e) => {
      let transcript = '';
      for (let i = 0; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript;
      }
      setInput(transcript);
    };
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
  }, [lang]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: 'user', content: input.trim() }, { role: 'assistant', content: mockReply(input.trim()) }]);
    setInput('');
  };

  const toggleMic = () => {
    if (!recognitionRef.current) return;
    if (!listening) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Bot className="h-5 w-5" /> Yukti Bot
        </h2>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-white/10 border border-white/10 rounded-md px-2 py-1 text-sm">
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-[60vh] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${m.role === 'assistant' ? 'bg-white/10' : 'bg-gradient-to-r from-[#43A047]/30 to-[#1976D2]/30 ml-auto'}`}>
              {m.content}
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button onClick={toggleMic} className={`rounded-full p-2 border border-white/10 ${listening ? 'bg-[#1976D2]/30' : 'bg-white/10'}`}>
            <Mic className="h-5 w-5" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Yukti anything about sustainability..."
            className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 outline-none placeholder:text-white/50"
          />
          <button onClick={handleSend} className="rounded-full bg-gradient-to-r from-[#43A047] to-[#1976D2] px-4 py-2 text-sm font-medium flex items-center gap-2">
            <Send className="h-4 w-4" /> Send
          </button>
        </div>
      </div>
    </div>
  );
}

function mockReply(text) {
  const lower = text.toLowerCase();
  if (lower.includes('job')) return 'Here are trending roles: Solar Technician (+70 CC), Carbon Analyst (+45 CC). Use the Jobs Hub to apply.';
  if (lower.includes('verify')) return 'Upload photos, location, and details in the Verification Hub. Our AI validates and awards credits.';
  if (lower.includes('course') || lower.includes('learn')) return 'Try Solar PV Basics (hi-IN) or Intro to Carbon Markets (bn-IN) in the EduCentre.';
  if (lower.includes('trade') || lower.includes('credit')) return 'Visit the Trade Center to buy/sell credits and see your portfolio analytics.';
  return "I can guide you across Yukti — jobs, verification, trading, and learning. What would you like to do?";
}
