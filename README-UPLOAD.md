# Charlie Barra Portfolio — Clean Recovery Release

This release was rebuilt from the uploaded `portfolio-main(1).zip`.

## What was fixed

- Replaced the fragmented stylesheet with one consolidated design system.
- Restored consistent margins, captions, cards, videos, navigation, and mobile layouts.
- Replaced the oversized Pokémon timeline with a compact gallery and short captions.
- Fixed the résumé filename and download links.
- Restored the missing favicon, Safari icon, and web manifest.
- Removed duplicate legacy `css/` and `js/` folders from the production package.
- Added visible keyboard focus styles and improved lightbox accessibility.
- Added image dimensions, lazy loading, and decoding hints.
- Optimized every image currently referenced by the website.
- Applied light grammar corrections while preserving Charlie’s wording and voice.

## Upload instructions

Upload the **contents** of this folder to the root of the GitHub `portfolio` repository, replacing the current files.

The package is designed as a full replacement release. Do not combine it with older CSS or JavaScript files.

## After GitHub Pages deploys

1. Open the site in a private/incognito window.
2. Hard refresh:
   - Mac: Command + Shift + R
   - Windows: Ctrl + Shift + R
3. Test:
   - iPhone Safari
   - iPhone Chrome
   - desktop Safari
   - desktop Chrome
   - Firefox
4. Confirm the résumé downloads from Resume and Contact.
5. Confirm all eight YouTube embeds load.
6. Confirm the Meteor Mayhem GitHub repository is public.
7. Open several gallery images and test keyboard Escape/close behavior.

## Scope limitations

The site contains no forms, mailto links, or AI bot. Form submission and AI prompt-injection testing are therefore not applicable.
