import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { certifications } from '@/lib/certifications';
import { ExternalLink, Award } from 'lucide-react';
import Link from 'next/link';

export default function CertificationsPage() {
  return (
    <FadeInStagger className="space-y-12 pb-20">
      <FadeInStaggerItem>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Certifications</h1>
        <p className="text-fg-muted text-sm sm:text-base">
          A showcase of professional certifications and verified achievements in software engineering and cloud.
        </p>
      </FadeInStaggerItem>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <FadeInStaggerItem key={cert.id} className="group flex flex-col justify-between p-5 rounded-xl border border-border bg-bg-card/50 hover:bg-bg-hover hover:border-fg-muted/20 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-tag text-fg-muted border border-border group-hover:bg-fg group-hover:text-bg transition-colors duration-500">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-fg">
                  {cert.issuer}
                </h3>
              </div>
              <p className="font-medium text-lg leading-snug group-hover:text-white transition-colors">
                {cert.title}
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <span className="text-xs font-medium text-fg-muted uppercase tracking-widest">
                {cert.date}
              </span>
              <Link 
                href={cert.link} 
                target="_blank" 
                className="p-2 -m-2 text-fg-muted hover:text-fg transition-colors"
                title="Verify Certificate"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </FadeInStaggerItem>
        ))}
      </div>
    </FadeInStagger>
  );
}
