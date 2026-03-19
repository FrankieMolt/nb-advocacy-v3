'use client';

import { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('sending');
    // Mailto fallback for anonymous hosting
    const subject = encodeURIComponent('Newsletter Signup - Reform NB');
    const body = encodeURIComponent(`Subscribe: ${email}`);
    window.location.href = `mailto:reformnb-tips@proton.me?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('sent'), 1000);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
      <Mail className="mx-auto mb-4 text-crisis-text" size={32} />
      <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Stay Informed</h3>
      <p className="text-neutral-400 text-sm mb-6 max-w-md mx-auto">
        Get updates on NB governance investigations. We don&apos;t track you or sell your data.
      </p>
      {status === 'sent' ? (
        <div className="flex items-center justify-center gap-2 text-green-400">
          <Check size={20} /> Opening your email client...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-crisis-red focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-crisis-red hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <Send size={16} /> Join
          </button>
        </form>
      )}
    </div>
  );
}
