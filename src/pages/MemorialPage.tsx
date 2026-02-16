'use client';

import { motion } from 'framer-motion';

export function MemorialPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-serif font-medium text-teal-900 mb-6">In Memoriam</h1>
                    <p className="text-xl text-gray-600 italic">
                        Honoring the life and legacy of Abdul Latif Ayodele.
                    </p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="aspect-video bg-gray-200 w-full flex items-center justify-center text-gray-400">
                        Image Placeholder (Abdul Latif Ayodele)
                    </div>
                    <div className="p-8 lg:p-12 space-y-6 text-gray-700 leading-relaxed text-lg">
                        <p>
                            The Latif Foundation was established to honor the memory of Abdul Latif Ayodele, a man who dedicated his life to helping others. His kindness, generosity, and unwavering faith touched the lives of countless individuals in his community.
                        </p>
                        <p>
                            Throughout his life, Abdul Latif believed in the power of education and the importance of supporting the most vulnerable. He was known for his quiet acts of charity, often going out of his way to ensure that his neighbors had food on their table and that children had the means to go to school.
                        </p>
                        <p>
                            This foundation seeks to continue his good work, building a legacy of compassion and service that will benefit generations to come. Every well we build, every child we educate, and every meal we provide is a tribute to his enduring spirit.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-serif text-teal-900 mb-8">May his legacy inspire us all.</h3>
                </div>
            </div>
        </div>
    );
}
