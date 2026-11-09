# Character and species content progress

## 2026-11-05 — Required visual templates

User instruction: every character record must use Sapphiron's exact visual template, including the effective palette and layout. Sapphiron's original CSS is now shared in `assets/character-record.css`; all four individual records and `characters/character-template.html` load it, plus the existing usability script/theme. Keep the hero portrait on the right, record index on the left, personal facts in the main profile, identical spacing/type/components and original portrait reservations. Do not introduce a separate character design. Existing character prose and unresolved creator decisions are retained.

User instruction: Humans and Mycelials must use the Kenku field-guide design, including its double folio border, section spreads and tilted margin annotations. Their shared assets are `assets/peoples-field-guide.css` and `assets/peoples-field-guide.js`. Use dark sapphire-blue surfaces and gold accents; no green index/aside panels. The Kenku page itself remains unchanged. Preserve all species prose, anchors and links.

Validation: all five character pages have matching computed Sapphiron styles at desktop width; all four individual records and both species pages fit a 390px viewport without horizontal overflow. Human tabs support clicks and arrow-key navigation. Original portraits remain reserved. Deployment results are reported in the chat.

## 2026-11-05 — First scheduled batch

Base: `3f1159ddad29589017676c7438398d8d6ac98519`.

- Added `characters/maren-vell.html`: Maren Vell, 46-year-old human, independent map conservator and visiting reader. She has a private city workshop, no Library staff appointment and no responsibility for visitor maps or reception. Indexed in the character archive and human species record.
- Expanded `peoples/humans.html` with learning across a lifetime, linked examples of Elowen and Maren, navigation to known individuals and cross-species links.
- Expanded `peoples/mycelials.html` with communication observations, individual development and links to other species. Hyssop's observations remain individual examples, not universal biology.
- Updated `characters/hyssop.html` to point to the existing species archive, leave his emergence mechanism open, and link his established workplace. Added the missing explicit head closing tag. Corrected stale destination links encountered in the Mycelial record.
- Kept the user’s freshly edited Kenku field guide unchanged.

### Continue from here

Read the current main branch and recent changes before editing. Check this log against actual files; do not repeat a completed batch or grow text merely to meet a quota. English prose and existing page designs remain the default. Prioritize useful, concrete content and reciprocal links.

Creator reservations to preserve: Sapphiron's pendant promise and other party; Elowen's close relationships, further past and undecided botanical tool; original portraits. Sapphiron is an independent reader, not staff. Hyssop handles welcome, public guidance and authorised everyday keys; lost property, messages and correspondence belong to other staff, whose named appointments remain open. His awakening location does not establish his biological origin. Mycelial network memory remains uncertain. Do not import outside-franchise Kenku canon or use Sapphiron's unusual age as a species lifespan.

Validation and publication outcome are reported in the scheduled chat. A GitHub commit alone is not proof that Pages has deployed.

## 2026-11-07 — Connect human biology with individual lives

Base: `0ce81f4a80892fde1b0a5213ae10075e8d874369`. Read current main, recent commits, both human records and Elowen/Maren records; no AGENTS.md exists in the current tree. This batch changes two species records only, plus this log.

- HUM—001: explained the already-established distinction between study, innate affinity, direct casting and artefact use, with a link to HUM—002. Kept occupations and personal worth separate from affinity.
- HUM—002: added existing field-guide margin annotations linking Elowen\'s established age and work to the lifespan discussion, and Maren\'s craft to the distinction between expertise and casting ability. Neither character is assigned an unrecorded magical affinity or ability.
- Preserved English, all existing sections/IDs/scripts/styles, sapphire/gold field-guide layout, original illustration reservations and creator decisions. No new biological rules or character relationships were invented.

Validation: changed HTML tag nesting, duplicate IDs, internal fragment targets and added relative links checked before publication. Shared assets and character templates unchanged. Deployment outcome is reported in chat. Next content batch: inspect current Mycelial/Hyssop connections and creator changes before adding material; avoid repeating the human affinity explanations.

## 2026-11-09 — Mycelial workplace connections

Reviewed unchanged main 7651078741fc7bdb2efd7a561e5f33fda8fb8b9d and current Hyssop/Mycelial records against existing creator reservations. Expanded MYC—001 with Hyssop's established reception skills as an individual example of belonging, linked his duties and Welcome & Arrival, and aligned card labels with his official receptionist role. No new biology, relationships or staff responsibilities. Existing shared styles, illustrations, scripts and section IDs preserved. Added destinations and duties fragment checked against existing records; changes are confined to one species page and this log. Publication outcome reported separately.
