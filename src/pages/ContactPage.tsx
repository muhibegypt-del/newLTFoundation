'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-serif font-medium text-teal-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out to us with any questions, partnership inquiries, or to learn more about our work.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-serif text-gray-900 mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-50 p-3 rounded-lg text-teal-700">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:info@latiffoundation.org" className="text-gray-600 hover:text-teal-700 transition-colors">
                                            info@latiffoundation.org
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-50 p-3 rounded-lg text-teal-700">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                                        <p className="text-gray-600">Abuja, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-serif text-gray-900 mb-4">Connect on Social Media</h3>
                            <p className="text-gray-600 mb-6">Follow our journey and see the impact of your support.</p>
                            <div className="flex gap-4">
                                {/* Social placeholders */}
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">FB</div>
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">IG</div>
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">TW</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-serif text-gray-900 mb-6">Send a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Your message..." />
                            </div>
                            <button type="submit" className="w-full bg-teal-800 text-white font-medium py-3 rounded-lg hover:bg-teal-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
