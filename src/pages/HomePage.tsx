'use client';

import { Suspense, lazy } from 'react';
import { Hero } from '../components/sections/Hero';
import { Programs } from '../components/sections/Programs';
import { TrustStrip } from '../components/sections/TrustStrip';
import { PartnerOrganizations } from '../components/sections/PartnerOrganizations';

// Lazy load other sections
const Values = lazy(() => import('../components/sections/Values').then(m => ({ default: m.Values })));
// const Impact = lazy(() => import('../components/sections/Impact').then(m => ({ default: m.Impact })));
// const GetInvolved = lazy(() => import('../components/sections/GetInvolved').then(m => ({ default: m.GetInvolved })));

export function HomePage() {
    return (
        <main>
            <Hero />
            <TrustStrip />
            <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" /></div>}>
                <Programs />
                <PartnerOrganizations />
                {/* Values section might be relevant but moving to About page as per plan, hiding for now until confirmed */}
                {/* <Values /> */}
                {/* Impact section removed as per feedback */}
                {/* <Impact /> */}
                {/* GetInvolved removed or moved to other pages */}
                {/* <GetInvolved /> */}
            </Suspense>
        </main>
    );
}
