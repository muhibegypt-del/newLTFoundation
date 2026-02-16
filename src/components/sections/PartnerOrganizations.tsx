'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
    { name: 'IET', fullName: 'Islamic Education Trust', description: 'Educational Partnership' },
    { name: 'ERF', fullName: 'Extended Relief Foundation', description: 'Humanitarian Aid' },
    { name: 'BKF', fullName: 'Building Knowledge Foundation', description: 'Skills Development' },
    { name: 'FOMWAN', fullName: 'Federation of Muslim Women Associations in Nigeria', description: 'Women Empowerment' },
];

export function PartnerOrganizations() {
    return (
        <section className="section-md bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-20">
                    <span className="eyebrow-gold mb-4 block">Partnerships</span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-medium text-gray-900 mb-4">Our Partners</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
                        Working together with leading organizations to deliver impactful solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PARTNERS.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-8 bg-secondary rounded-xl hover:ring-brand-gold/20 hover:ring-2 transition-all ring-1 ring-gray-900/5"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-5 text-primary font-bold text-lg ring-1 ring-gray-900/5">
                                {partner.name}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">{partner.fullName}</h3>
                            <p className="text-sm text-stone-400">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
