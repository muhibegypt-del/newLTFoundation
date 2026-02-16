export interface NavigationLink {
    label: string;
    href: string;
    dropdownItems?: { label: string; href: string }[];
}

export const NAV_CONFIG: NavigationLink[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
        dropdownItems: [
            { label: 'Our Mission', href: '/about' },
            { label: 'In Memoriam', href: '/memorial' },
        ]
    },
    {
        label: 'Partners',
        href: '/partners',
    },
    {
        label: 'Programs',
        href: '/#programs',
        dropdownItems: [
            { label: 'Ramadan Feeding', href: '/ramadan-feeding' },
            { label: 'Water Wells', href: '/water-wells' },
            { label: 'Education', href: '/education' },
            { label: 'Skills Training', href: '/skills-training' },
            { label: 'Orphan Empowerment', href: '/orphan-empowerment' },
            { label: 'Masjid Projects', href: '/masjid-projects' },
        ]
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];
