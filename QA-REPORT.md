# Final QA Summary

## Automated checks completed

- All internal HTML links resolve to existing files.
- All local image, stylesheet, JavaScript, favicon, manifest, and PDF paths resolve.
- Case-sensitive filenames were checked within the release package.
- Referenced images were resized and optimized.
- Legacy CSS/JS directories were excluded.
- One consolidated stylesheet is used by all main pages.
- One consolidated script is used by all main pages.

## Manual checks still required after deployment

Actual Safari and Firefox rendering cannot be fully certified from this environment.
Please test the deployed site on:
- iPhone Safari at portrait width
- iPhone Chrome
- desktop Safari
- desktop Chrome
- Firefox

Also verify YouTube and GitHub availability after deployment because third-party services may block automated testing.
