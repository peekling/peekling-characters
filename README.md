![Peekling characters gathered in a bright, welcoming landscape](https://cdn.peekling.com/v1/community/peekling-community-banner.png)

# Official Peekling character packs

Meet the little characters that give Peekling its personality.

This is the official home for character packs made and maintained by the Peekling project. Each pack describes how one character looks, moves, reacts, and introduces itself to a compatible Peekling runtime. The packs are open source, data-only, and independently versioned.

Visit the [Peekling organization](https://github.com/peekling), or read the [pack authoring guide](PACK-AUTHORING.md) to see how a character is put together.

## What is a character pack?

A character pack is a small bundle of data and images. It does not contain executable character behavior.

Every official pack includes:

- a `character.json` manifest with the character's identity, states, movement, version, and license
- 1x, 2x, and 4x PNG atlases for different display densities
- a `thumbnail.png` preview
- its own `README.md`, `LICENSE`, and `NOTICE`

The manifest records safe relative image paths and SHA-256 hashes for every atlas. Development scripts, tests, source art, and generated QA reports stay in this repository and outside the published package boundary.

## Peekling characters

This table is generated from the current package metadata and the live npm registry. Published rows link to their verified npm version. Packs that are still source-only stay visible with an explicit `(unreleased)` label and no npm link.

<!-- PACK_ROSTER_START -->
30 character packs are published and installable from npm. 0 packs are shown as unreleased for future follow-up.

| Preview | Character | Description | Version | Package |
| :---: | --- | --- | --- | --- |
| ![Bramble](packages/pack-bramble/thumbnail.png) | [Bramble](packages/pack-bramble) | A warm forest bear with a slow, reassuring lumber. | `0.1.1` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.1) |
| ![Buns](packages/pack-buns/thumbnail.png) | [Buns](packages/pack-buns) | A round burger buddy who rolls forward and settles softly. | `0.1.1` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.1) |
| ![Byte](packages/pack-byte/thumbnail.png) | [Byte](packages/pack-byte) | A futuristic cyber cat that runs, chases, scans, and reacts through a cyan visor and animated tech effects. | `0.1.1` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.1) |
| ![Crumb](packages/pack-crumb/thumbnail.png) | [Crumb](packages/pack-crumb) | A toast-sized friend who skips without dropping a crumb. | `0.1.1` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.1) |
| ![Ember](packages/pack-ember/thumbnail.png) | [Ember](packages/pack-ember) | A rust-red forest friend with a bright, adventurous streak. | `0.1.1` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.1) |
| ![Fable](packages/pack-fable/thumbnail.png) | [Fable](packages/pack-fable) | A clever terracotta fox always ready for the next trail. | `0.1.1` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.1) |
| ![Glint](packages/pack-glint/thumbnail.png) | [Glint](packages/pack-glint) | A glowing elemental wisp drifting wherever wonder leads. | `0.1.1` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.1) |
| ![Halo](packages/pack-halo/thumbnail.png) | [Halo](packages/pack-halo) | A tiny ringed planet rolling through its own bright orbit. | `0.1.1` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.1) |
| ![Luna](packages/pack-luna/thumbnail.png) | [Luna](packages/pack-luna) | A dreamy moon friend tracing a quiet little orbit. | `0.1.1` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.1) |
| ![Mochi](packages/pack-mochi/thumbnail.png) | [Mochi](packages/pack-mochi) | A lavender-eared bunny with soft, springy steps. | `0.1.1` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.1) |
| ![Moss](packages/pack-moss/thumbnail.png) | [Moss](packages/pack-moss) | A mint-green frog who crosses the page in cheerful hops. | `0.1.1` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.1) |
| ![Nib](packages/pack-nib/thumbnail.png) | [Nib](packages/pack-nib) | A tiny futuristic racing car with expressive windshield eyes, rolling wheels, telemetry, drifting, and boost reactions. | `0.1.1` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.1) |
| ![Nori](packages/pack-nori/thumbnail.png) | [Nori](packages/pack-nori) | A cozy sushi friend with a gentle rice-body shuffle. | `0.1.1` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.1) |
| ![Nova](packages/pack-nova/thumbnail.png) | [Nova](packages/pack-nova) | A cosmic creature who phases gently between little worlds. | `0.1.1` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.1) |
| ![Orbit](packages/pack-orbit/thumbnail.png) | [Orbit](packages/pack-orbit) | A round little robot with a cool display and precise tiny steps. | `0.1.1` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.1) |
| ![Peek](packages/pack-peek/thumbnail.png) | [Peek](packages/pack-peek) | A curious kitten-fox who follows pointers and celebrates small wins. | `0.1.1` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.1) |
| ![Pip](packages/pack-pip/thumbnail.png) | [Pip](packages/pack-pip) | A warm-gold corgi who trots into every little celebration. | `0.1.1` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.1) |
| ![Posh](packages/pack-posh/thumbnail.png) | [Posh](packages/pack-posh) | A pearl-white orb whose expressive eyes turn every movement and feeling into a readable performance. | `0.1.1` | [`@peekling/pack-posh`](https://www.npmjs.com/package/@peekling/pack-posh/v/0.1.1) |
| ![Purl](packages/pack-purl/thumbnail.png) | [Purl](packages/pack-purl) | A woolly lamb who bounds forward on cloud-soft feet. | `0.1.1` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.1) |
| ![Quill](packages/pack-quill/thumbnail.png) | [Quill](packages/pack-quill) | A thoughtful scholar owl who flutters between bright ideas. | `0.1.1` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.1) |
| ![Rivet](packages/pack-rivet/thumbnail.png) | [Rivet](packages/pack-rivet) | A clockwork beetle who trundles along with careful purpose. | `0.1.1` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.1) |
| ![Rook](packages/pack-rook/thumbnail.png) | [Rook](packages/pack-rook) | A curious raccoon who tiptoes toward every shiny surprise. | `0.1.1` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.1) |
| ![Sol](packages/pack-sol/thumbnail.png) | [Sol](packages/pack-sol) | A sunny companion who floats with a warm, radiant pulse. | `0.1.1` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.1) |
| ![Terra](packages/pack-terra/thumbnail.png) | [Terra](packages/pack-terra) | A pocket-sized Earth gliding with a calm, steady spin. | `0.1.1` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.1) |
| ![Tico](packages/pack-tico/thumbnail.png) | [Tico](packages/pack-tico) | A bright taco friend quick-stepping without spilling a thing. | `0.1.1` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.1) |
| ![Tumble](packages/pack-tumble/thumbnail.png) | [Tumble](packages/pack-tumble) | A cheerful cactus wanderer with a tiny western swagger. | `0.1.1` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.1) |
| ![Vali](packages/pack-vali/thumbnail.png) | [Vali](packages/pack-vali) | A brave little slime whose bouncy courage fills the room. | `0.1.1` | [`@peekling/pack-vali`](https://www.npmjs.com/package/@peekling/pack-vali/v/0.1.1) |
| ![Waddle](packages/pack-waddle/thumbnail.png) | [Waddle](packages/pack-waddle) | A scarf-wrapped penguin with a gentle side-to-side waddle. | `0.1.1` | [`@peekling/pack-waddle`](https://www.npmjs.com/package/@peekling/pack-waddle/v/0.1.1) |
| ![X3](packages/pack-x3/thumbnail.png) | [X3](packages/pack-x3) | A gentle retro terminal whose cyan LED eyes turn activity into expressive companionship. | `0.1.1` | [`@peekling/pack-x3`](https://www.npmjs.com/package/@peekling/pack-x3/v/0.1.1) |
| ![Zesty](packages/pack-zesty/thumbnail.png) | [Zesty](packages/pack-zesty) | A lively pizza slice who scoots with a confident tilt. | `0.1.1` | [`@peekling/pack-zesty`](https://www.npmjs.com/package/@peekling/pack-zesty/v/0.1.1) |
<!-- PACK_ROSTER_END -->

Run `npm run roster` after changing package metadata or after a release. `npm run roster:check` verifies npm publication state and keeps every unreleased package clearly labeled.

## Using a pack

When a character appears in the table, follow its package link to npm for the verified installable version. Its source directory documents the validation command and license records, while `character.json` remains the source of truth for the character's states, movement, artwork, and capabilities.

Only rows with an npm link have been verified as installable. An `(unreleased)` row points to repository source for future follow-up and is not an availability claim. Source directories may also contain newer work than npm. The Peekling runtime is separate from these character packs and is responsible for loading the manifest and rendering its referenced atlas.

The workspace at the repository root is private and cannot be published. Only the individual `packages/pack-*` workspaces are release boundaries.

## Make a character

Have an idea for a new little friend? The creative core of a pack has three parts:

- `character.json` describes the character, its animation states, movement, version, license, and atlas files.
- `atlas-1x.png` is the minimum artwork atlas in the general pack contract. An official pack must also include matching `atlas-2x.png` and `atlas-4x.png` variants.
- `thumbnail.png` is the small preview shown in galleries and package listings.

An official publishable pack also needs `package.json`, `README.md`, `LICENSE`, `NOTICE`, and every atlas named by its manifest. Start with the [pack authoring guide](PACK-AUTHORING.md) and use [Peek's package](packages/pack-peek) as a complete source example.

Enhanced creation tools will be linked here when they are released. Until then, the authoring guide, package manifests, and current official packs are the source of truth.

## Contributing

Thoughtful fixes and focused improvements are welcome. If you want to propose a new official character or a larger change, please [open an issue](https://github.com/peekling/peekling-characters/issues) first so we can agree on scope, artwork provenance, and licensing.

You will need Node.js 22 or later. The workspace records npm 11.19.0 as its package manager.

1. Open an issue for a new character so its name, place in the official collection, artwork ownership, and license can be discussed before you do a lot of work. Changes to an existing pack are accepted only after its code owner or designated reviewer approves them.
2. Fork and clone the repository, then install the workspace dependencies with `npm install`.
3. Choose a new lowercase identifier such as `my-friend`. It must not duplicate a character directory, manifest name, or npm package. Use [Peek's complete source package](packages/pack-peek) as a structural example and create `packages/pack-my-friend`.
4. Build the publishable boundary:

   - `package.json` names `@peekling/pack-my-friend`, declares a semantic version, public access, license, repository directory, build and test scripts, and the exact public files.
   - `character.json` uses format 1 and the same name, version, and license. Give it a title, author, description, 1x/2x/4x atlas records, animation states with valid frames and timings, all eight movement directions, and a positive default scale.
   - `thumbnail.png` is a valid 64x64 PNG. The current official grid uses 64-pixel logical cells, 16 columns, and 3 rows, so the three atlases are 1024x192, 2048x384, and 4096x768. Their declared density, cell size, dimensions, and SHA-256 hashes must agree.
   - Add `README.md`, `LICENSE`, `NOTICE`, a focused test, and every atlas referenced by the manifest. Keep source art and development helpers outside the `files` list.
   - For the current manual art pipeline, add the character to `scripts/build-character-roster.mjs` with its required metadata and movement records. Supply the same repository-only source inputs used by the existing packs so `npm run build` can reproduce the atlases rather than accepting hand-edited output.

5. Run the focused package test and build. For Peek, the equivalent commands are:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. If package metadata changed, regenerate this table with `npm run roster`, then run the full repository gate with `npm run check`.
7. Run `npm run changeset` and include every affected pack. Every file change under a pack directory needs a version decision, including art, JSON, metadata, docs, tests, and source files. Choose the level yourself:

   - `patch` for compatible fixes, corrections, or tuning
   - `minor` for meaningful backwards-compatible additions or substantial creative updates
   - `major` for a breaking change, replacement, or removal

   Automation never guesses the level from the size or kind of your change.

8. Open a pull request that explains the character, provenance and license of its art, what changed, and why the chosen version level is appropriate.

Before review, pull-request CI requires a release plan for every changed pack. It then checks the manifest contract and state definitions, identifier uniqueness, unused npm names for new packs, safe image paths and hashes, PNG integrity, thumbnail size, 1x/2x/4x atlas existence and scale geometry, tests, reproducible builds, size limits, licensing, and the exact files in each npm package dry-run. These checks prevent accidental conflicts and packaging mistakes; human reviewers still decide whether a character or change belongs in the official collection.

After a validated change reaches `main`, Changesets prepares a separate version pull request for review. The first npm publication remains a deliberate maintainer action. Automatic OIDC publication can be enabled only after the initial packages exist and each package trusts this repository's publish workflow. Until that bootstrap is complete, repository source is not a promise that a package is available from npm. See [release preparation](RELEASING.md) for the complete maintainer flow.

This repository is the curated home for official Peekling packs, not a global community catalog. Creators can publish compatible third-party packs from their own package or static-hosting boundaries with a valid public license.

## Licensing and attribution

Repository tooling, tests, and documentation are licensed under [Apache-2.0](LICENSE). All 30 current official character packs also declare Apache-2.0 and carry their own `LICENSE` and `NOTICE` files.

Redistribution must follow the applicable license and notice terms for each pack. The Peekling name, logo, official mascot, and other distinctive brand identity are not granted by the tooling license unless a specific asset license says otherwise. See [licensing and attribution](LICENSING.md), [NOTICE](NOTICE), and [AUTHORS](AUTHORS) for the complete records.

<p align="center">
  <a href="README.md">🇺🇸</a> · <a href="translations/README.es.md">🇪🇸</a> · <a href="translations/README.zh-CN.md">🇨🇳</a> · <a href="translations/README.ko.md">🇰🇷</a> · <a href="translations/README.ja.md">🇯🇵</a> · <a href="translations/README.nl.md">🇳🇱</a> · <a href="translations/README.ar.md">🇸🇦</a> · <a href="translations/README.vi.md">🇻🇳</a> · <a href="translations/README.ru.md">🇷🇺</a> · <a href="translations/README.fr.md">🇫🇷</a> · <a href="translations/README.hi.md">🇮🇳</a> · <a href="translations/README.pt-BR.md">🇧🇷</a> · <a href="translations/README.de.md">🇩🇪</a> · <a href="translations/README.it.md">🇮🇹</a> · <a href="translations/README.id.md">🇮🇩</a> · <a href="translations/README.tr.md">🇹🇷</a> · <a href="translations/README.pl.md">🇵🇱</a> · <a href="translations/README.bn.md">🇧🇩</a>
</p>

![A narrow strip of grass, wildflowers, foliage, and a winding path](https://cdn.peekling.com/v1/community/peekling-ground-footer-v1.png)
