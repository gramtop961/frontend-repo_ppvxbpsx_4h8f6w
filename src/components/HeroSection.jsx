import React, { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, Search } from 'lucide-react';

const LANG_OPTIONS = [
  { code: 'hi-IN', label: 'Hindi' },
  { code: 'en-IN', label: 'English' },
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

function useSpeechRecognition(selectedLang) {
  const recognitionRef = useRef(null);
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSupported(true);
      const rec = new SpeechRecognition();
      rec.lang = selectedLang || 'en-IN';
      rec.continuous = false;
      rec.interimResults = true;

      rec.onresult = (event) => {
        let finalText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPart = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalText += transcriptPart;
        }
        if (finalText) setTranscript(finalText);
      };
      rec.onend = () => setListening(false);
      recognitionRef.current = rec;
    }
  }, [selectedLang]);

  const start = () => {
    if (!supported || !recognitionRef.current) return;
    try {
      recognitionRef.current.lang = selectedLang || 'en-IN';
      setTranscript('');
      setListening(true);
      recognitionRef.current.start();
    } catch (e) {
      setListening(false);
    }
  };

  const stop = () => {
    if (!supported || !recognitionRef.current) return;
    try {
      recognitionRef.current.stop();
      setListening(false);
    } catch (e) {
      // noop
    }
  };

  return { supported, listening, transcript, start, stop, setTranscript };
}

export default function HeroSection() {
  const [lang, setLang] = useState('hi-IN');
  const { supported, listening, transcript, start, stop, setTranscript } = useSpeechRecognition(lang);

  const placeholder = useMemo(
    () => (
      lang === 'hi-IN'
        ? 'आवाज़ से खोजें: "मुझे सोलर जॉब्स दिखाओ"'
        : 'Search with voice: "Show me solar jobs near Delhi"'
    ),
    [lang]
  );

  function handleSearchSubmit(e) {
    e.preventDefault();
    const query = transcript.trim();
    if (!query) return;
    // In a full app, this would query the backend for jobs and insights.
    alert(`Searching Yukti in ${lang}:\n${query}`);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text + Search */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur border border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/80">AI-driven sustainability platform</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Earn, trade, and learn through green work
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-xl">
              Yukti matches people and companies to sustainability jobs, tracks carbon credits, and brings AI-powered learning to every language.
            </p>

            {/* Search */}
            <form onSubmit={handleSearchSubmit} className="mt-8">
              <div className="flex items-stretch gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <input
                    type="text"
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    className="w-full rounded-xl bg-white/10 border border-white/10 pl-10 pr-4 py-3 outline-none placeholder:text-white/60 text-white backdrop-blur focus:ring-2 focus:ring-[#43A047]/60"
                    placeholder={placeholder}
                  />
                </div>
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="rounded-xl bg-white/10 border border-white/10 px-3 py-3 text-sm text-white backdrop-blur focus:ring-2 focus:ring-[#1976D2]/60"
                  aria-label="Language"
                >
                  {LANG_OPTIONS.map((o) => (
                    <option key={o.code} value={o.code} className="bg-[#0b1f3a]">{o.label}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={listening ? stop : start}
                  className={`rounded-xl px-4 py-3 font-medium inline-flex items-center gap-2 transition-colors ${
                    listening
                      ? 'bg-red-500/90 hover:bg-red-500'
                      : 'bg-gradient-to-r from-[#43A047] to-[#1976D2] hover:opacity-90'
                  }`}
                  aria-pressed={listening}
                >
                  <Mic className="h-5 w-5" /> {listening ? 'Listening…' : 'Voice'}
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-white text-[#0b1f3a] px-5 py-3 font-semibold hover:bg-white/90"
                >
                  Search
                </button>
              </div>
              {!supported && (
                <p className="mt-2 text-xs text-white/70">
                  Voice recognition is not supported in this browser. You can still type your query above.
                </p>
              )}
            </form>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Multilingual</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">AI Job Matcher</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Carbon Credit Ready</span>
            </div>
          </div>

          {/* Right: Spline animation */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/10 bg-black/20">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft gradient overlay for theme harmony */}
            <div className="pointer-events-none absolute inset-0"
                 style={{ background: 'radial-gradient(circle at 70% 30%, rgba(25,118,210,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(67,160,71,0.15), transparent 50%)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
