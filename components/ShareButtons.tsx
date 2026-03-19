'use client';

import { Share2, Twitter, Linkedin, Link2, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const shareOnTwitter = () => {
    const text = encodeURIComponent(title);
    const u = encodeURIComponent(shareUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${u}`, '_blank', 'width=550,height=420');
  };
  
  const shareOnLinkedIn = () => {
    const u = encodeURIComponent(shareUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`, '_blank', 'width=550,height=420');
  };
  
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
      } catch {}
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-neutral-400 font-bold uppercase tracking-wider mr-2">Share:</span>
      
      {/* Native share (mobile) */}
      {typeof navigator !== 'undefined' && 'share' in navigator && (
        <button onClick={nativeShare} className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors" aria-label="Share">
          <Share2 size={18} />
        </button>
      )}
      
      {/* Twitter/X */}
      <button onClick={shareOnTwitter} className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors" aria-label="Share on X/Twitter">
        <Twitter size={18} />
      </button>
      
      {/* LinkedIn */}
      <button onClick={shareOnLinkedIn} className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors" aria-label="Share on LinkedIn">
        <Linkedin size={18} />
      </button>
      
      {/* Copy link */}
      <button onClick={copyLink} className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors flex items-center gap-1" aria-label="Copy link">
        {copied ? <Check size={18} className="text-green-400" /> : <Link2 size={18} />}
        {copied && <span className="text-xs text-green-400">Copied!</span>}
      </button>
    </div>
  );
}
