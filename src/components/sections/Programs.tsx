'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/data/imageAssets';

// Square payment links
const SQUARE_LINKS = {
  WATER_WELL: 'https://square.link/u/d5fSYpG9',
  EDUCATION: 'https://square.link/u/VFOiNlbN',
  ORPHANS: 'https://square.link/u/1muC8Kjs',
  FOOD_RELIEF: 'https://square.link/u/dpkEeY0Q',
  MASJID: 'https://square.link/u/PaNdJVqa',
  QURBANI: 'https://square.link/u/wTjNjHHp',
  ZAKAT: 'https://square.link/u/d5fSYpG9',
};

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
    image: '',
    href: '/ramadan-feeding',
    donateLink: '#',
  },
  {
    title: 'Water Wells',
    description: 'Construct water wells to provide clean, safe drinking water to villages, improving health and reducing disease.',
    image: '',
    href: '/water-wells',
    donateLink: '#',
  },
  {
    title: 'Education',
    description: 'Support the education of children through scholarships, school supplies, and infrastructure improvements.',
    image: '',
    href: '/education',
    donateLink: '#',
  },
  {
    title: 'Skills Training',
    description: 'Empower individuals with vocational skills to help them secure sustainable livelihoods and support their families.',
    image: '',
    href: '/skills-training',
    donateLink: '#',
  },
  {
    title: 'Orphan Empowerment',
    description: 'Provide comprehensive care and support for orphans, ensuring they have access to education, healthcare, and a loving environment.',
    image: '',
    href: '/orphan-empowerment',
    donateLink: '#',
  },
  {
    title: 'Masjid Projects',
    description: 'Build and maintain Masjids to serve as centers for worship, community gathering, and education.',
    image: '',
    href: '/masjid-projects',
    donateLink: '#',
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Focus Areas</span>
          <h2 className="text-3xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            Impact where it <br className="hidden sm:block" />
            <span className="italic text-teal-700">matters most.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-[15px]">
            We focus on sustainable development goals that transform lives and communities across West Africa.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] w-full bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400 font-medium tracking-widest uppercase text-sm">
                Image Placeholder
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8 text-center bg-white border-t-0">
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                  {program.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {program.description}
                </p>

                {/* Action Stack */}
                <div className="space-y-3 mt-auto w-full">
                  {program.href ? (
                    <Button asChild variant="outline" className="w-full rounded-xl border-gray-200 hover:border-teal-600 hover:text-teal-700 h-11 uppercase tracking-widest text-xs font-bold">
                      <Link to={program.href}>
                        Learn More <span className="sr-only">about {program.title}</span> <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  ) : (
                    <div className="w-full h-11 flex items-center justify-center border border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest bg-gray-50 cursor-not-allowed rounded-xl">
                      Coming Soon
                    </div>
                  )}

                  <Button asChild className="w-full rounded-xl bg-teal-800 hover:bg-teal-700 text-white h-11 uppercase tracking-widest text-xs font-bold shadow-none">
                    <a href={program.donateLink}>
                      Donate Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

