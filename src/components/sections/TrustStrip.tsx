'use client';

import { Marquee } from '../ui/Marquee';

const TRUSTED_BY = [
    'Islamic Education Trust',
    'Federation of Muslim Women Associations in Nigeria',
    'Nasrul-Lahi-L-Fatih Society',
    'Ansar-Ud-Deen Society',
    'Muslim Students Society of Nigeria',
    'The Companion',
    'The Criterion',
];

export function TrustStrip() {
    return (
        <section className="py-14 lg:py-16 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-stone-400">
                    Trusted by communities and organizations across West Africa
                </p>
            </div>

            <Marquee pauseOnHover className="[--duration:40s]">
                {TRUSTED_BY.map((org, i) => (
                    <div key={i} className="mx-6 flex items-center gap-6">
                        <span className="text-xl md:text-2xl font-serif text-stone-400 hover:text-primary transition-colors whitespace-nowrap">
                            {org}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-brand-gold/40 flex-shrink-0" aria-hidden="true" />
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
