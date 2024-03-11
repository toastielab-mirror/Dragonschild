import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Pages',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Our projects',
      links: [
        { text: 'Toastielab', href: 'https://toastielab.dev' },
        { text: 'Dragons child hosting', href: 'https://dragonschildhosting.net' },
        { text: 'Valkyriecoms', href: 'https://www.valkyriecoms.com' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Status', href: 'https://status.dragonschildhosting.net' },
      ],
    },
    // Commenting this out until this page is ready.
    // TODO: Finish this.
    /*
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
      ],
    },
    */
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Toastielab', icon: 'tabler:brand-git', href: 'https://toastielab.dev/Dragonschildstudios/dragonschildstudios.com' },
  ],
  footNote: `
    <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://dragonschildstudios.com/"> Dragons child studios</a> · All rights reserved.
  `,
};
