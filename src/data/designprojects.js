export const designProjects = [
    {
    id: 'luminara-catalog',               
    category: ['design'],
 
    // ── Card preview (shared card component) ──────────────────
    name: 'Luminara Catalog',
    image: `${process.env.PUBLIC_URL}/images/luminara-cover.png`,
    project: 'Data Merge-ready InDesign template for lifestyle brands',
    description: 'A print-ready InDesign data merge ready catalog template with master page, and paragraph/character style system.',
    label: ['InDesign', 'Print Design', 'Typography', 'Grid Systems'],
    navigation: 'Purchase',          // label on the live-site button
    url: 'https://creativemarket.com/your-shop/luminara-catalog', // replace with real URL
 
    // ── Page hero ─────────────────────────────────────────────
    subtitle: 'Product Catalog Template',
    productType: 'InDesign Template Data Merge ready (.indd + .idml)',
    timeline: '1 weeks',
    client: 'Commercial Release',
 
    // ── The sell (shown in hero blurb) ────────────────────────
    tagline: 'InDesign Data Merge template with optioanl Shopify automation. Print-ready. Fully editable.',
    problem:
      'Small lifestyle brands and independent retailers need catalog-quality print materials but can\'t afford agency design rates or the learning curve of building a complex InDesign grid from scratch.',
    solution:
      'A fully production-ready InDesign template with a modular editorial grid, pre-built master page, a complete paragraph and character style system, and placeholder smart objects. Buyers are layout-complete in under an hour.',
 
    // ── What's included (design-specific field) ────────────────
    whatsIncluded: [
      { item: 'INDD + IDML files', detail: 'Compatible with InDesign CC 2020 and later' },
      { item: 'Sample CSV', detail: '6 product csv file with images to test data' },
      { item: 'Paragraph & character styles', detail: 'Full style system in file. Swap fonts in seconds' },
      { item: 'package.json', detail: '3 seasonal palette variants included' },
      { item: 'Clean up script file', detail: 'cleans the HTML from descritions, hits Shopify API directly so need to for manual CSV export' },
      { item: 'Help documentation', detail: 'README PDF setup guide included' },
    ],
 
    // ── Design decisions (mirrors dev project rationale) ──────
    designDecisions: [
      {
        decision: 'Modular 12-column grid',
        rationale:
          'Gives buyers maximum flexibility — product pages, editorial spreads, and text-heavy sections all derive from the same underlying grid, keeping the document visually consistent even after heavy customization.',
      },
      {
        decision: 'Style-sheet-first typography',
        rationale:
          'Every text element is style-tagged. Buyers can rebrand the document to their own typefaces in under two minutes by editing paragraph styles.',
      },
      {
        decision: 'Neutral warm-cream base palette',
        rationale:
          'Lifestyle products photograph best against neutral dark or warm-cream backgrounds. The default palette is intentionally unsaturated so product imagery always reads as the hero.',
      },
      {
        decision: 'IDML export alongside INDD',
        rationale:
          'IDML ensures backwards compatibility to InDesign 2020, dramatically widening the potential buyer pool without any design compromise.',
      },
    ],
 
    // ── Results / selling points ───────────────────────────────
    results: [
      'No manually creating fields for each product, simply data merge into file',
      'Style set up allows to easily change fonts, sizes and colors without editing the document',
      'Modular layouts reorder without breaking the grid',
    ],
 
    // ── Image gallery (lightbox order: hero first) ─────────────
    screenshots: [
      `${process.env.PUBLIC_URL}/images/luminara-cover.png`,
      `${process.env.PUBLIC_URL}/images/luminara-spread-1.png`,
      `${process.env.PUBLIC_URL}/images/luminara-spread-2.png`,
    ],
 
    // ── Spec table (shown in sidebar) ─────────────────────────
    specs: {
      'Format': 'US Letter + A4 variants',
      'Bleed': '3mm / 0.125"',
      'Data Merge': '.csv',
      'Optional': 'Node.js script for Shopify product merge',
      'Fonts': 'Google Fonts (free)',
      'Software': 'InDesign CC 2020+',
      'File Types': '.indd, .idml, .pdf (preview), .json, .js',
    },
 
    // ── Card badge variants ────────────────────────────────────
    badges: [
      { label: 'Design', color: 'warning' },
      { label: 'Print', color: 'secondary' },
    ],
 
    role: 'Designer & Template Author — concept, grid architecture, style system, production, and Creative Market listing.',
  },
{
  id: 'art-meditation-color-system',
  category: ['design'],
 
  // ── Card preview ──────────────────────────────────────────
  name: 'Art & Meditation PWA',
  image: `${process.env.PUBLIC_URL}/images/colorScreen.png`,
  project: 'Color system for a mindfulness and art PWA',
  description: 'A warm, earthy color system built for stillness and creative intention — covering palette definitions, design tokens, dark mode, and emotional rationale.',
  label: ['Color Theory', 'Design Tokens', 'UI/UX Design', 'PWA', 'Design Systems'],
  navigation: 'Design',  // card button label
  url: null,                         // no external URL — uses internal route below
  internalRoute: '/design/art-meditation-color-system', // used instead of url
 
  // ── Page hero ─────────────────────────────────────────────
  subtitle: 'Color System · v1.0',
  productType: 'Design System Document',
  timeline: 'In Progress',
  tagline: 'Warm. Earthy. Intentional.',
 
  problem: 'A mindfulness and art journaling PWA needs a color language that feels calming and creative simultaneously — without defaulting to the cold, clinical palettes common in wellness apps.',
  solution: 'A 7-token palette drawn from natural pigments, aged paper, and ember light — with full dark mode support, emotional rationale per color, and button state documentation baked in.',
 
  designDecisions: [
    {
      decision: 'Warm neutrals over pure white or pure black',
      rationale: 'Parchment Glow (#fff9f0) and Charcoal Ink (#1a1816) reduce eye strain during long creative or meditation sessions while reinforcing the handmade, organic brand feel.'
    },
    {
      decision: 'Single high-contrast CTA (Ember Orange)',
      rationale: 'One clear action color ensures users always know what to tap next. Ember Orange (#c94e11) pops against both light and dark backgrounds without feeling aggressive in a mindfulness context.'
    },
    {
      decision: 'Misted Sky as disabled/rest state',
      rationale: 'Using a blue-grey (#b9cad1) for inactive states creates a subtle breath-like visual pause — reinforcing the meditative UX intention rather than using a generic grey.'
    },
    {
      decision: 'Sage Mist for success only',
      rationale: 'Reserving green exclusively for completions and milestones gives it semantic weight — users learn to associate it with achievement rather than just another accent color.'
    }
  ],
 
  results: [
    '7-token palette covering all UI states',
    'Full dark mode — tested in-situ',
    'Emotional rationale documented per color',
    'Design tokens ready for Figma Variables or CSS custom properties',
    'Button states: primary, secondary, ghost, disabled',
    'Mobile-responsive color system document',
  ],
 
  whatsIncluded: null,
  specs: {
    'Status':     'In Progress',
    'Format':     'React component + HTML',
    'Tokens':     '7 design tokens',
    'Modes':      'Light + Dark',
    'Platform':   'PWA (Progressive Web App)',
    'Tools':      'Figma, CSS custom properties, Color Theory',
  },
 
  screenshots: [
    `${process.env.PUBLIC_URL}/images/colorScreen.png`,
    // `${process.env.PUBLIC_URL}/images/art-meditation-dark.png`,
    // `${process.env.PUBLIC_URL}/images/art-meditation-tokens.png`,
  ],
 
  badges: [
    { label: 'Design', color: 'warning' },
    { label: 'In Progress', color: 'secondary' },
  ],
 
  role: 'UX Designer — color strategy, token architecture, dark mode design, and emotional rationale documentation.',
},
]