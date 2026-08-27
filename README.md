![Peekling characters gathered in a bright, welcoming landscape](./assets/peekling-community-banner.png)

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

This table is generated from the current package metadata and the live npm registry. It shows only package versions that are genuinely published and installable from npm. Unpublished work in this repository stays out of the public roster.

<!-- PACK_ROSTER_START -->
No character packs are published to npm yet. This table will fill as verified packages become available.

| Preview | Character | Description | Version | Package |
| :---: | --- | --- | --- | --- |
<!-- PACK_ROSTER_END -->

Run `npm run roster` after changing package metadata or after a release. `npm run roster:check` verifies local package metadata against npm and keeps unpublished versions out of the table.

## Using a pack

When a character appears in the table, follow its package link to npm for the verified installable version. Its source directory documents the validation command and license records, while `character.json` remains the source of truth for the character's states, movement, artwork, and capabilities.

Only the versions in the table have been verified against npm. Source directories may contain newer work that is not published yet. The Peekling runtime is separate from these character packs and is responsible for loading the manifest and rendering its referenced atlas.

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

Repository tooling, tests, and documentation are licensed under [Apache-2.0](LICENSE). All 28 current official character packs also declare Apache-2.0 and carry their own `LICENSE` and `NOTICE` files.

Redistribution must follow the applicable license and notice terms for each pack. The Peekling name, logo, official mascot, and other distinctive brand identity are not granted by the tooling license unless a specific asset license says otherwise. See [licensing and attribution](LICENSING.md), [NOTICE](NOTICE), and [AUTHORS](AUTHORS) for the complete records.
