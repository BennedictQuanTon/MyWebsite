import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.9.01.64.01 1.11.01 1.2 0 .21-.16.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-12 px-4 md:px-8 lg:px-12 xl:px-20 border-t border-border-token/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="text-xl font-bold font-display text-accent-deep dark:text-accent-bright">
            Long Quan Ton
          </div>
          <p className="text-xs text-text-muted max-w-sm text-center md:text-left leading-relaxed">
            AI Developer & Undergraduate Student at UTS & HCMUT. Building intelligent networks with agentic workflows.
          </p>
        </div>

        {/* Center: Contact Details */}
        <div className="flex flex-col items-center space-y-1 text-xs text-text-muted">
          <span className="font-semibold uppercase tracking-wider text-text-heading mb-1">Contact</span>
          <a href="mailto:tonlongquanvn@gmail.com" className="hover:text-accent transition-colors">
            tonlongquanvn@gmail.com
          </a>
          <a href="tel:0964474527" className="hover:text-accent transition-colors">
            0964474527
          </a>
        </div>

        {/* Right: Social & Contact */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/BennedictQuanTon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 text-text-muted hover:text-text-heading transition-colors"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/bennedictquanton"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 text-text-muted hover:text-text-heading transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:tonlongquanvn@gmail.com"
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 text-text-muted hover:text-text-heading transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          <span className="text-[10px] text-text-muted tracking-widest uppercase">
            &copy; {currentYear} Bennedict Quan Ton. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
