# Website quality review

## Daily review instructions

Run at 13:30 Europe/Madrid, before the 14:30 character/species content routine. Always read current main and recent commits, preserve concurrent edits, and validate before publishing. Character records use Sapphiron's shared template; species use the Kenku field guide with sapphire-blue surfaces and gold details. Preserve original portraits, creator reservations and the latest field-guide column layout.

## 2026-11-05 — Initial correction run

Baseline: `fa4fbd4dd19ee9bb32d66f7e50c77c754c2229c3`.

Coverage: read all 51 textual repository files. Audited every internal HTML link and fragment, existing shared scripts, reader scripts and representative rendered pages. The corrected site has 44 HTML pages; 533 internal links and 171 fragments resolve. All 12 executable script units parse.

Corrections:
- Restored the missing Natural Sciences directory at `departments/natural-sciences/index.html`, repairing 22 links to that destination.
- Restored the legacy homepage `#catalogue` and `#archives` anchors, repairing four links.
- Corrected the Atrium's Public Reading Rooms destination, the Character Archive's Peoples & Cultures links, the homepage's department-directory card and default Atrium action.
- Fixed whitespace splitting in multiword homepage searches.
- Clarified that the historical archive is in preparation and that its current link opens Random Discoveries.
- Fixed Seed Morphology's save/remove favourites render call; added exact continuation links.
- Fixed Living Index chapter links pointing to chapter ends and skipped intentional blank pages on mobile; corrected previous/next availability and exact continuation links.
- Fixed an unescaped apostrophe that prevented the Dahlia reader from starting. Both sides of each spread are now available in its stacked phone layout.
- Added narrowly scoped book-legibility styles: dark ink on printed surfaces and paper-tinted nested notes/cards. Exterior navy/gold and character/species styles are preserved.
- Restored visible selected states for tabs, object selectors, district buttons and reader favourites. Reused accessible keyboard tab handling in the Kenku guide.
- Connected Reading Desk history, saved pages and progress to the existing browser-local reader data. Clear removes history only, preserving saved pages/progress. Visits are now recorded consistently through the shared utility.

Verification: mobile 390px layout, seed save/favourites without blanking, multiword search, displayed history/favourites/progress and history clearing, Living Index chapter start and first readable mobile page, Dahlia script and both page sides, Kenku keyboard tabs and gold selected state. Deployment outcome is reported in the chat.

### Next review

Start from the current deployed commit and this log. Re-run internal navigation checks after content changes. Broaden representative visual coverage of the longer botanical readers, particularly printed tables, nested highlights and responsive pagination. Check external image/source availability without replacing the creator's illustrations or inventing attribution. A passed internal-link scan does not establish that every external URL or every factual claim has been verified.

## 2026-11-07 — Navigation and recent-change regression review

Reviewed main `7009be27d215f87884de4bef50c8d9ea62af5114`, recent changes since the initial correction, README and both progress logs. No repository AGENTS.md was present in the recursive tree. Preserved new contributor registry, biological records, original Kenku artwork, portrait background and restored midnight-blue/gold character palette.

Coverage: fetched all 56 HTML/CSS/JS files at the pinned commit; scanned 48 HTML pages, 651 internal href/src references and 211 fragments: no missing targets. Parsed 13 executable JavaScript units without syntax errors. Visually checked the published Sirens desktop record: navy folio, gold border/headings and readable introduction. GitHub Pages run 42365117049 completed successfully for the reviewed commit. The original correction run 42046960838 was cancelled; publication is established by the later successful deployed head, not that cancelled run.

No demonstrated new defect required a website change in this batch. Only this coverage log is updated. Pending: broader mobile/desktop reader-table visual checks, external resource availability, and deeper runtime interaction checks for new pages. Static parsing is not runtime testing; internal-link resolution is not factual verification.
