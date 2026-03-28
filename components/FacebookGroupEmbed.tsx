"use client";

interface FacebookGroupEmbedProps {
  groupId: string;
  width?: number;
  height?: number;
  showSocialContext?: boolean;
  showMetadata?: boolean;
}

export function FacebookGroupEmbed({
  groupId,
  width = 340,
  height = 500,
  showSocialContext = true,
  showMetadata = true,
}: FacebookGroupEmbedProps) {
  return (
    <div
      className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center"
      style={{ width, height }}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          f
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">NB Power Rants</h3>
          <p className="text-sm text-white">Public Group · 20,000+ members</p>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <p className="text-sm text-blue-800">
          Facebook embed requires their JavaScript SDK.{" "}
          <a href={`https://www.facebook.com/groups/${groupId}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
            Visit the group directly →
          </a>
        </p>
      </div>
      <noscript>
        <a
          href={`https://www.facebook.com/groups/${groupId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          View the NB Power Rants Facebook Group →
        </a>
      </noscript>
    </div>
  );
}
