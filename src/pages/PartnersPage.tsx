'use client';

import { PartnerOrganizations } from '../components/sections/PartnerOrganizations';

export function PartnersPage() {
    return (
        <div className="pt-24 pb-16">
            <section className="text-center px-6 lg:px-8 mb-12">
                <h1 className="text-4xl lg:text-5xl font-serif font-medium text-teal-900 mb-6">Our Partners</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We collaborate with trusted organizations to deliver impactful solutions and reach deeper into communities.
                </p>
            </section>

            <PartnerOrganizations />

            <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-24 text-center">
                <div className="bg-teal-50 rounded-2xl p-12 border border-teal-100">
                    <h2 className="text-2xl font-serif font-bold text-teal-900 mb-4">Become a Partner</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Interested in collaborating with us? We are always looking for organizations that share our vision and values.
                    </p>
                    <a href="/contact" className="inline-block bg-teal-800 text-white font-medium px-8 py-3 rounded-full hover:bg-teal-700 transition-colors">
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
}
