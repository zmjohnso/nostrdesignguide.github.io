"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Unique Design Challenges","href":"/docs/unique-design-challenges","docId":"unique-design-challenges"},{"type":"link","label":"Guiding Principles","href":"/docs/guiding-principles","docId":"guiding-principles"},{"type":"category","label":"Product Design Considerations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Jobs to be Done","href":"/docs/product-design-considerations/jobs-to-be-done","docId":"product-design-considerations/jobs-to-be-done"},{"type":"link","label":"Growth Loops","href":"/docs/product-design-considerations/growth-loops","docId":"product-design-considerations/growth-loops"},{"type":"link","label":"Collecing User Feedback","href":"/docs/product-design-considerations/collecting-feedback","docId":"product-design-considerations/collecting-feedback"},{"type":"link","label":"Programmatic SEO","href":"/docs/product-design-considerations/programmatic-seo","docId":"product-design-considerations/programmatic-seo"},{"type":"link","label":"Hooks","href":"/docs/product-design-considerations/hooks","docId":"product-design-considerations/hooks"},{"type":"link","label":"Product-Led Marketing","href":"/docs/product-design-considerations/product-led-marketing","docId":"product-design-considerations/product-led-marketing"},{"type":"link","label":"Open Graph Data","href":"/docs/product-design-considerations/open-graph-data","docId":"product-design-considerations/open-graph-data"}],"href":"/docs/category/product-design-considerations"},{"type":"category","label":"How-To","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Logged Out View","href":"/docs/how-to/logged-out-view","docId":"how-to/logged-out-view"},{"type":"link","label":"Onboarding","href":"/docs/how-to/onboarding","docId":"how-to/onboarding"},{"type":"link","label":"Sign In / Sign Up Screens","href":"/docs/how-to/sign-in-sign-up","docId":"how-to/sign-in-sign-up"},{"type":"link","label":"Relays","href":"/docs/how-to/relays","docId":"how-to/relays"},{"type":"link","label":"Impostor Prevention","href":"/docs/how-to/impostor-prevention","docId":"how-to/impostor-prevention"},{"type":"link","label":"Zaps","href":"/docs/how-to/zaps","docId":"how-to/zaps"},{"type":"link","label":"Private Key Safeguarding","href":"/docs/how-to/private-key-safeguarding","docId":"how-to/private-key-safeguarding"},{"type":"link","label":"Sharing","href":"/docs/how-to/sharing","docId":"how-to/sharing"}],"href":"/docs/category/how-to"},{"type":"category","label":"Design Principles","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Starting from Scratch","href":"/docs/design-principles/starting-from-scratch","docId":"design-principles/starting-from-scratch"},{"type":"link","label":"Accessibility","href":"/docs/design-principles/Accessibility","docId":"design-principles/Accessibility"},{"type":"link","label":"UI Tips","href":"/docs/design-principles/ui-tips","docId":"design-principles/ui-tips"}],"href":"/docs/category/design-principles"},{"type":"category","label":"Reference Designs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Color Palette Ideas","href":"/docs/reference-designs/color-palette-ideas","docId":"reference-designs/color-palette-ideas"},{"type":"link","label":"Social Components","href":"/docs/reference-designs/social-components","docId":"reference-designs/social-components"},{"type":"link","label":"Onboarding","href":"/docs/reference-designs/onboarding","docId":"reference-designs/onboarding"},{"type":"link","label":"Media","href":"/docs/reference-designs/media","docId":"reference-designs/media"},{"type":"link","label":"Long Form","href":"/docs/reference-designs/long-form","docId":"reference-designs/long-form"},{"type":"link","label":"Navigation","href":"/docs/reference-designs/navigation","docId":"reference-designs/navigation"},{"type":"link","label":"Relays","href":"/docs/reference-designs/relays","docId":"reference-designs/relays"},{"type":"link","label":"Settings","href":"/docs/reference-designs/settings","docId":"reference-designs/settings"},{"type":"link","label":"Zaps","href":"/docs/reference-designs/zaps","docId":"reference-designs/zaps"},{"type":"link","label":"Threads","href":"/docs/reference-designs/threads","docId":"reference-designs/threads"},{"type":"link","label":"Design Files","href":"/docs/reference-designs/design-files","docId":"reference-designs/design-files"}],"href":"/docs/category/reference-designs"},{"type":"link","label":"Resources","href":"/docs/resources","docId":"resources"}]},"docs":{"design-principles/Accessibility":{"id":"design-principles/Accessibility","title":"Accessibility","description":"Coming soon...","sidebar":"tutorialSidebar"},"design-principles/starting-from-scratch":{"id":"design-principles/starting-from-scratch","title":"Starting from Scratch","description":"Avoid bloat by designing a specific feature instead of the full client","sidebar":"tutorialSidebar"},"design-principles/ui-tips":{"id":"design-principles/ui-tips","title":"UI Tips","description":"Grids","sidebar":"tutorialSidebar"},"guiding-principles":{"id":"guiding-principles","title":"Guiding Principles","description":"Use this page as a cheatsheet for the guiding principles of Nostr. These principles are meant to help you make decisions about your client and to help you understand the reasoning behind the design decisions made in the reference designs. They also serve as a quick reminder - a north star so to speak - to keep you focused.","sidebar":"tutorialSidebar"},"how-to/impostor-prevention":{"id":"how-to/impostor-prevention","title":"Impostor Prevention","description":"Since nostr doesn\'t have central servers and there is no way to authenticate any users, we run into the challenge of preventing impostors on the protocol. Some solutions have been devised, though none are perfect yet. Here we\'ll explore various concepts such as NIP5 (not a good prevention mechanism) along with other ways of preventing impostors.","sidebar":"tutorialSidebar"},"how-to/logged-out-view":{"id":"how-to/logged-out-view","title":"Logged Out View","description":"A \\"logged out view\\" simply refers to the demo, trial or freemium version of the app. No login is required to see the contents of the app.","sidebar":"tutorialSidebar"},"how-to/onboarding":{"id":"how-to/onboarding","title":"Onboarding","description":"There are a few ways to approach onboarding. Regardless of our preferred approach, we should consider the progressive disclosure design principle.","sidebar":"tutorialSidebar"},"how-to/private-key-safeguarding":{"id":"how-to/private-key-safeguarding","title":"Private Key Safeguarding","description":"There is no password reset in Nostr. The moment the user leaks their keys, it\u2019s game over and a new npub has to be created.","sidebar":"tutorialSidebar"},"how-to/relays":{"id":"how-to/relays","title":"Relays","description":"Relay discovery, continues to be a highly debated topic in the nostr community, primarily because the entire decentralization of the protocol depends on how people discover relays.","sidebar":"tutorialSidebar"},"how-to/sharing":{"id":"how-to/sharing","title":"Sharing","description":"Sharing outside of nostr makes nostr grow faster. I didn\'t mean to rhyme, but it\'s true.","sidebar":"tutorialSidebar"},"how-to/sign-in-sign-up":{"id":"how-to/sign-in-sign-up","title":"Sign In / Sign Up Screens","description":"Logging in with Extensions","sidebar":"tutorialSidebar"},"how-to/zaps":{"id":"how-to/zaps","title":"Zaps","description":"What are they?","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Nostr Design","description":"A comprehensive resource for designers and developers to build successful nostr products.","sidebar":"tutorialSidebar"},"product-design-considerations/collecting-feedback":{"id":"product-design-considerations/collecting-feedback","title":"Collecing User Feedback","description":"Collecting user feedback is crucial for app design for a variety of reasons:","sidebar":"tutorialSidebar"},"product-design-considerations/growth-loops":{"id":"product-design-considerations/growth-loops","title":"Growth Loops","description":"Product growth loops are essentially self-sustaining mechanisms where the actions of users directly contribute to the product\'s growth. This is usually a sequence of events starting from a user discovering the product, to them getting value from it, to finally sharing it with others, which then brings in new users.","sidebar":"tutorialSidebar"},"product-design-considerations/hooks":{"id":"product-design-considerations/hooks","title":"Hooks","description":"Understanding Product Hooks","sidebar":"tutorialSidebar"},"product-design-considerations/jobs-to-be-done":{"id":"product-design-considerations/jobs-to-be-done","title":"Jobs to be Done","description":"\\"Jobs to be Done\\" (JTBD) theory that suggests users \\"hire\\" products to perform a specific \\"job\\" or meet a need for them.","sidebar":"tutorialSidebar"},"product-design-considerations/open-graph-data":{"id":"product-design-considerations/open-graph-data","title":"Open Graph Data","description":"Open Graph (OG) tags communicate information that allows people to preview the link before clicking it.","sidebar":"tutorialSidebar"},"product-design-considerations/product-led-marketing":{"id":"product-design-considerations/product-led-marketing","title":"Product-Led Marketing","description":"Product-led marketing is a business approach that focuses on user experience and serving the customers\' needs to facilitate marketing. The opposite of this would be a sales approach that relies on constant \\"pavement pounding\\" to get the word out.","sidebar":"tutorialSidebar"},"product-design-considerations/programmatic-seo":{"id":"product-design-considerations/programmatic-seo","title":"Programmatic SEO","description":"Clients that plan on sticking around for the long haul should consider SEO in their design and development as soon as possible. SEO is one of the most reliable methods of acquiring new users over the long term - even more powerful than advertising and referral systems. While not strictly a design topic, programmatic SEO should be considered in the overall design of the product as it will determine how your pages are structured to accommodate the most complex queries.","sidebar":"tutorialSidebar"},"reference-designs/color-palette-ideas":{"id":"reference-designs/color-palette-ideas","title":"Color Palette Ideas","description":"The following is a list of sample color palettes. They are provided mostly as starting points, guidance and ideas. You are encouraged to modify them as needed to fit your branding.","sidebar":"tutorialSidebar"},"reference-designs/design-files":{"id":"reference-designs/design-files","title":"Design Files","description":"All of the following files and work contained in them is open source. Use however you please.","sidebar":"tutorialSidebar"},"reference-designs/long-form":{"id":"reference-designs/long-form","title":"Long Form","description":"","sidebar":"tutorialSidebar"},"reference-designs/media":{"id":"reference-designs/media","title":"Media","description":"","sidebar":"tutorialSidebar"},"reference-designs/navigation":{"id":"reference-designs/navigation","title":"Navigation","description":"Coming soon...","sidebar":"tutorialSidebar"},"reference-designs/onboarding":{"id":"reference-designs/onboarding","title":"Onboarding","description":"Onboarding components will vary depending on the type of client. For example, if your client\'s sole purpose is to set up a user profile, then you may want to include additional steps such as relay selection. Here are some examples of onboarding flows:","sidebar":"tutorialSidebar"},"reference-designs/relays":{"id":"reference-designs/relays","title":"Relays","description":"Relay screens contain many opportunities not yet explored. Depending on how the relays are used by the client (manually set, or automatically applied), we can design the interface in different ways. We can also make relay information more useful by welcoming people to learn more about relays and explore them.","sidebar":"tutorialSidebar"},"reference-designs/settings":{"id":"reference-designs/settings","title":"Settings","description":"The settings screen can vary quite a bit depending on the type of client, platform and what sorts of features the client implements. Below you will find various settings examples. Please check back often to see updated reference designs.","sidebar":"tutorialSidebar"},"reference-designs/social-components":{"id":"reference-designs/social-components","title":"Social Components","description":"Coming soon...","sidebar":"tutorialSidebar"},"reference-designs/threads":{"id":"reference-designs/threads","title":"Threads","description":"Coming soon...","sidebar":"tutorialSidebar"},"reference-designs/zaps":{"id":"reference-designs/zaps","title":"Zaps","description":"Zaps are the magic of nostr. With zaps, users can exchange value instantly. In this section we will highlight some common places for zaps and provide some example components of how to display zaps and their relevant views. If you have any unique design use cases for your specific client, please don\'t hestiate to reach out.","sidebar":"tutorialSidebar"},"resources":{"id":"resources","title":"Resources","description":"The following is a list of resources that may come in handy for nostr designers and developers.","sidebar":"tutorialSidebar"},"unique-design-challenges":{"id":"unique-design-challenges","title":"Unique Design Challenges","description":"Nostr, given its nature, presents some unique design challenges and personal rewards. Nostr introduces several new concepts that most people are not familiar with:","sidebar":"tutorialSidebar"}}}')}}]);