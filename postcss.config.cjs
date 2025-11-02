const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production'
      ? purgecss({
          content: [
            './index.html',
            './src/**/*.{js,jsx,ts,tsx}',
          ],
          safelist: {
            standard: [
              // Protege clases de MDB UI Kit
              /^(mdb|modal|btn|card|row|col|form|alert|badge|breadcrumb|navbar|nav|pagination|spinner|toast|tooltip|popover|offcanvas|dropdown|collapse|carousel|tab|accordion|list-group|table|image|figure|embed|input|select|textarea|form-check|form-switch|form-range|form-floating|btn-group|btn-toolbar|input-group|border|shadow|position|display|flex|grid|gap|align|justify|order|m-|p-|w-|h-|fs-|fw-|text-|bg-|opacity-|cursor-|user-select)/,
            ],
          },
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null,
  ].filter(Boolean),
};