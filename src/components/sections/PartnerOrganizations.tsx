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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">Our Partners</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
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
                            className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-teal-800 font-bold text-xl border border-gray-100">
                                {partner.name}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{partner.fullName}</h3>
                            <p className="text-sm text-gray-500">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
