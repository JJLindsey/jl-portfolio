export const designProjects = [
    {
    id: 'luminara-catalog',               // used in /projects/:id route
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
    productType: 'InDesign Template (.indd + .idml)',
    timeline: '1 weeks',
    client: 'Commercial Release',
 
    // ── The sell (shown in hero blurb) ────────────────────────
    tagline: 'InDesign data merge template with optioanl Shopify automation. Print-ready. Fully editable.',
    problem:
      'Small lifestyle brands and independent retailers need catalog-quality print materials but can\'t afford agency design rates or the learning curve of building a complex InDesign grid from scratch.',
    solution:
      'A fully production-ready 32-page InDesign template with a modular editorial grid, pre-built master pages, a complete paragraph and character style system, and placeholder smart objects — so buyers are layout-complete in under an hour.',
 
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
 
  // ── Add more design projects below in the same shape ─────────
  // {
  //   id: 'folio-magazine',
  //   ...
  // },
]