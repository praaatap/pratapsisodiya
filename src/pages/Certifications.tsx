import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { certifications } from '@/lib/certifications';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const issuers = Array.from(new Set(certifications.map(c => c.issuer)));

  return (
    <FadeInStagger className="space-y-16 pb-24">
      <FadeInStaggerItem className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Certifications</h1>
        <p className="text-fg-muted max-w-xl text-lg leading-relaxed">
          Professional achievements and verified cloud/software engineering credentials.
        </p>
      </FadeInStaggerItem>

      <div className="space-y-14">
        {issuers.map((issuer) => (
          <FadeInStaggerItem key={issuer} className="space-y-4">
            <h2 className="text-xs font-semibold text-fg-muted uppercase tracking-[0.2em] border-l-2 border-border pl-4">
              {issuer}
            </h2>
            
            <div className="space-y-3">
              {certifications
                .filter(c => c.issuer === issuer)
                .map((cert) => (
                <div
                  key={cert.id}
                  className="group flex items-center justify-between p-4 rounded-lg border border-border bg-bg-card/30 hover:bg-bg-hover hover:border-fg-muted/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="hidden sm:flex p-2 rounded-full bg-tag text-fg-muted group-hover:bg-fg/10 group-hover:text-fg transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-medium text-fg truncate group-hover:text-white transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-fg-muted uppercase tracking-wider font-mono mt-1">
                        Issued: {cert.date}
                      </p>
                    </div>
                  </div>

                  {cert.link !== "#" && (
                    <a 
                      href={cert.link} 
                      target="_blank"
                      rel="noreferrer"
                      className="ml-4 p-2 rounded-md hover:bg-bg text-fg-muted hover:text-fg transition-all"
                      title="Verify Credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </FadeInStaggerItem>
        ))}
      </div>
    </FadeInStagger>
  );
}
