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
        <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
                    Trusted by communities and organizations across West Africa
                </p>
            </div>

            <Marquee pauseOnHover className="[--duration:40s]">
                {TRUSTED_BY.map((org, i) => (
                    <div key={i} className="mx-8 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-serif text-gray-400 hover:text-teal-800 transition-colors whitespace-nowrap">
                            {org}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
