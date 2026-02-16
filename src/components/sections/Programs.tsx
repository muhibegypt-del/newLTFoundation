'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/data/imageAssets';

interface Program {
  title: string;
  description: string;
  image: string;
  href: string | null;
  donateLink: string;
}

const programs: Program[] = [
  {
    title: 'Ramadan Feeding',
    description: 'Provide hot, nutritious meals and food parcels to families in need during the holy month of Ramadan.',
    image: IMAGES.HOT_MEALS.GIRL_PLATE,
    href: '/ramadan-feeding',
    donateLink: '#',
  },
  {
    title: 'Water Wells',
    description: 'Construct water wells to provide clean, safe drinking water to villages, improving health and reducing disease.',
    image: IMAGES.WATER.GIRL_COLLECTING,
    href: '/water-wells',
    donateLink: '#',
  },
  {
    title: 'Education',
    description: 'Support the education of children through scholarships, school supplies, and infrastructure improvements.',
    image: IMAGES.EDUCATION.FRIENDS_BLACKBOARD,
    href: '/education',
    donateLink: '#',
  },
  {
    title: 'Skills Training',
    description: 'Empower individuals with vocational skills to help them secure sustainable livelihoods and support their families.',
    image: IMAGES.EDUCATION.TUTOR_SESSION,
    href: '/skills-training',
    donateLink: '#',
  },
  {
    title: 'Orphan Empowerment',
    description: 'Provide comprehensive care and support for orphans, ensuring they have access to education, healthcare, and a loving environment.',
    image: IMAGES.EDUCATION.BOY_SMILING,
    href: '/orphan-empowerment',
    donateLink: '#',
  },
  {
    title: 'Masjid Projects',
    description: 'Build and maintain Masjids to serve as centers for worship, community gathering, and education.',
    image: IMAGES.MASJID.MAIN,
    href: '/masjid-projects',
    donateLink: '#',
  },
];

export function Programs() {
  return (
    <section id="programs" className="section-lg bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-gold mb-4 block">Our Focus Areas</span>
          <h2 className="text-3xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            Impact where it <br className="hidden sm:block" />
            <span className="italic text-primary">matters most.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-stone-500 leading-relaxed text-[15px]">
            We focus on sustainable development goals that transform lives and communities across West Africa.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-gray-900/5"
            >
              {/* Image — 3/2 cinematic ratio with hover zoom */}
              <div className="aspect-[3/2] w-full relative overflow-hidden">
                <img
                  src={`${program.image}?tr=w-600,h-400,fo-auto,q-80`}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-7">
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">
                  {program.description}
                </p>

                {/* Single primary action per card */}
                <div className="mt-auto">
                  {program.href ? (
                    <Link
                      to={program.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-gold transition-colors"
                    >
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="sr-only">about {program.title}</span>
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-stone-400">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
