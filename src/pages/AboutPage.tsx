'use client';

import { motion } from 'framer-motion';

export function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative px-6 lg:px-8 mb-24">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-serif font-medium text-teal-900 mb-6">
                            Our Mission & Vision
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are dedicated to uplifting communities in West Africa through sustainable development, education, and humanitarian aid, honoring the legacy of Abdul Latif Ayodele.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-teal-50 p-8 rounded-2xl border border-teal-100"
                    >
                        <h2 className="text-2xl font-serif font-bold text-teal-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To provide essential resources, education, and opportunities to vulnerable populations in Nigeria and The Gambia, fostering self-reliance and dignity.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-sky-50 p-8 rounded-2xl border border-sky-100"
                    >
                        <h2 className="text-2xl font-serif font-bold text-sky-900 mb-4">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A world where every individual has access to clean water, food security, and education, empowering them to build a brighter future for themselves and their communities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-gray-900 text-white py-24 mb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif mb-4">Core Values</h2>
                        <p className="text-gray-400">The principles that guide our work every day.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Compassion', description: 'We act with deep empathy and care for those we serve.' },
                            { title: 'Integrity', description: 'We are transparent, accountable, and honest in all our actions.' },
                            { title: 'Sustainability', description: 'We build long-term solutions that empower communities to thrive independently.' },
                            { title: 'Excellence', description: 'We strive for the highest quality in our programs and operations.' },
                            { title: 'Collaboration', description: 'We work in partnership with local communities and organizations to maximize impact.' },
                            { title: 'Faith', description: 'Inspired by Islamic values, we serve humanity with sincerity and dedication.' }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="text-xl font-medium text-teal-400 mb-2">{value.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
