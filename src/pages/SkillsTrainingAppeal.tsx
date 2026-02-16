'use client';

import { IMAGES } from '../data/imageAssets';
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

export function SkillsTrainingAppeal() {
    return (
        <div className="min-h-screen bg-slate-50">
            <AppealHero
                title="Skills Training"
                subtitle="Empower individuals with the skills they need to break the cycle of poverty. Your support provides vocational training and tools for sustainable livelihoods."
                image=""
                ctaLink="#"
            />

            <AppealProblem
                title="The Cycle of Poverty"
                intro={
                    <p>
                        Without marketable skills, many potential breadwinners are unable to support their families, leading to a cycle of poverty that spans generations. We provide training in tailoring, carpentry, agriculture, and more.
                    </p>
                }
                bullets={[
                    "Vocational training workshops",
                    "Provision of tools and equipment",
                    "Mentorship and business support"
                ]}
                image={{
                    src: "",
                    alt: "Skills training workshop"
                }}
            />

            <AppealCTA
                title="Empower a Family"
                text="Give someone the tools to build a better future."
                ctaLink="#"
            />
        </div>
    );
}
