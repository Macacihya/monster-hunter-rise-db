import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Diamond, ChevronRight } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="text-kamura-100 text-sm leading-relaxed">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // Root paragraph styling
          p: ({node, ...props}) => <p className="mb-3 text-kamura-200" {...props} />,
          
          // Headings - Styled like section dividers in a game menu
          h1: ({node, ...props}) => (
            <h1 className="text-xl font-bold text-kamura-accent border-b-2 border-kamura-accent/50 pb-1 mb-3 mt-4 tracking-wide uppercase flex items-center gap-2" {...props} />
          ),
          h2: ({node, ...props}) => (
            <h2 className="text-lg font-bold text-white border-l-4 border-kamura-accent pl-3 mb-3 mt-5 bg-gradient-to-r from-kamura-700/50 to-transparent py-1" {...props} />
          ),
          h3: ({node, ...props}) => (
            <h3 className="text-base font-semibold text-kamura-300 mb-2 mt-3 flex items-center" {...props} />
          ),

          // Lists - Styled with custom icons
          ul: ({node, ...props}) => <ul className="space-y-1 mb-4 pl-1" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-1 mb-4 text-kamura-200" {...props} />,
          li: ({node, ...props}) => (
            <li className="flex items-start gap-2 text-kamura-200">
              <span className="mt-1.5 shrink-0 text-kamura-500"><Diamond size={6} fill="currentColor" /></span>
              <span className="flex-1">{props.children}</span>
            </li>
          ),

          // Bold/Strong - Highlighted in Gold for key terms
          strong: ({node, ...props}) => <strong className="text-kamura-accent font-bold" {...props} />,

          // Blockquote - Styled as "Flavor Text" or "Hunter Tips"
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-2 border-kamura-500 bg-kamura-900/40 italic text-kamura-400 p-3 my-4 rounded-r-lg text-xs" {...props} />
          ),

          // Tables - The "Pokemon Stats" look
          table: ({node, ...props}) => (
            <div className="overflow-x-auto rounded-lg border border-kamura-700 my-4 shadow-md bg-kamura-900">
              <table className="w-full text-sm text-left" {...props} />
            </div>
          ),
          thead: ({node, ...props}) => (
            <thead className="bg-kamura-800 text-kamura-accent uppercase text-xs tracking-wider font-bold border-b border-kamura-700" {...props} />
          ),
          th: ({node, ...props}) => <th className="px-3 py-3 whitespace-nowrap" {...props} />,
          tbody: ({node, ...props}) => <tbody className="divide-y divide-kamura-800" {...props} />,
          tr: ({node, ...props}) => <tr className="hover:bg-kamura-800/50 transition-colors" {...props} />,
          td: ({node, ...props}) => <td className="px-3 py-2 text-kamura-200 border-r border-kamura-800/50 last:border-r-0" {...props} />,
          
          // Links
          a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 underline decoration-dotted underline-offset-2" {...props} />,
          
          // Horizontal Rule
          hr: ({node, ...props}) => <hr className="border-kamura-700 my-6" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;