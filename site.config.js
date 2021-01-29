module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '5b274ef08de84a8cb6f8ba7e0e19c13c',

  // basic site info (required)
  name: 'Mola1129',
  domain: 'mola1129.dev',
  author: 'mola1129',

  // open graph metadata (optional)
  description: 'mola1129',
  socialImageTitle: 'mola1129',
  socialImageSubtitle: 'mola1129! 👋',

  // social usernames (optional)
  twitter: 'mola1129',
  github: 'mola1129',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null, // URL
  defaultPageCover: null, // URL
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false
}
