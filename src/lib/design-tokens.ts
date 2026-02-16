// ============================================
// DESIGN TOKENS - Single Source of Truth
// ============================================

// COLOR PALETTE
export const COLORS = {
    primary: '#14532d',       // Deep teal — foundation identity
    primaryDark: '#134e4a',   // Supporting dark teal
    gold: '#C8973E',          // Warm gold accent
    goldLight: '#D4AD5C',     // Gold hover state
    goldDark: '#A87B2F',      // Gold active state
    cream: '#fef1e4',         // Warm neutral background
    white: '#ffffff',
    text: {
        primary: '#1c1917',   // Near-black warm
        secondary: '#57534e', // Stone-600
        muted: '#78716c',     // Stone-500
        subtle: '#a8a29e',    // Stone-400
    },
} as const;

// TYPOGRAPHY
export const FONT_FAMILY = {
    serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
    sans: "'Lato', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
} as const;

// SPACING (4px base unit)
export const SPACING = {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
} as const;

// SECTION SPACING — professional-grade breathing room
export const SECTION_SPACING = {
    sm: 'py-20 lg:py-28',       // Compact sections (trust strips, dividers)
    md: 'py-24 lg:py-32',       // Standard sections
    lg: 'py-28 lg:py-40',       // Major sections (hero, programs, CTA)
    xl: 'py-32 lg:py-48',       // Statement sections (memorial, about hero)
} as const;

// Z-INDEX SCALE (layered architecture)
export const Z_INDEX = {
    base: 0,
    raised: 10,
    dropdown: 50,
    sticky: 80,
    header: 100,
    modal: 200,
    toast: 300,
    tooltip: 400,
} as const;

// TYPOGRAPHY SCALE
export const FONT_SIZE = {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
} as const;

// BORDER RADIUS
export const RADIUS = {
    none: '0px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
} as const;

// COMPONENT DEFAULTS
export const BUTTON_SIZES = {
    sm: { px: 'px-4', py: 'py-2', text: 'text-sm', minH: 'min-h-[36px]' },
    md: { px: 'px-5', py: 'py-3', text: 'text-sm', minH: 'min-h-[44px]' },
    lg: { px: 'px-8', py: 'py-4', text: 'text-base', minH: 'min-h-[60px]' },
} as const;

export const HEADING_STYLES = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-serif font-semibold',
    2: 'text-2xl md:text-3xl lg:text-4xl font-serif font-medium',
    3: 'text-xl md:text-2xl font-serif font-medium',
    4: 'text-lg md:text-xl font-serif font-medium',
} as const;
