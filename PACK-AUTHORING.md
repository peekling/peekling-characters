# Pack authoring

A Peekling character pack is a data-only npm package. It cannot include executable character behavior.

## Required public files

A publishable pack must include `package.json`, `character.json`, `thumbnail.png`, `LICENSE`, `README.md`, and every atlas referenced by `character.json`. Include `NOTICE` whenever the pack's license or attribution record requires it. Every official Apache-2.0 pack includes `NOTICE`.

The package name must use the official package form `@peekling/pack-*`. The package and character versions and license identifiers must agree. `character.json` must name at least one safe relative atlas path and record each atlas density, source cell size, and SHA-256 hash. Official packs currently include 1x, 2x, and 4x variants.

`thumbnail.png` is required 64x64 PNG artwork. Official atlases use a 64-pixel logical cell in a 16-column by 3-row grid: `atlas-1x.png` is 1024x192, `atlas-2x.png` is 2048x384, and `atlas-4x.png` is 4096x768. The manifest's density, source cell size, dimensions, and SHA-256 records must agree with those PNG files.

Every state needs valid in-grid frame numbers, exactly one timing mode (`fps` or one positive duration per frame), and an explicit `loop` value. Each of the eight locomotion directions must point to a defined movement state. Development scripts, tests, generated reports, and source art stay outside the npm archive.

## Local checks

Run `npm run build` to rebuild all official atlases and run art QA. Run `npm run pack:check` to inspect all package dry-runs. Run `npm run check` before preparing a release.

When package metadata changes, run `npm run roster` to regenerate the root package table.

## Release records

Every change beneath a `packages/pack-*` directory requires a Changeset for that package, including PNG, JSON, metadata, documentation, test, and source changes. The contributor and reviewer choose semver deliberately; automation does not infer it from the size or kind of the diff.

- `patch`: compatible fixes, corrections, and tuning
- `minor`: meaningful backwards-compatible additions or substantial creative updates
- `major`: breaking changes, replacement, or removal

Do not add the private workspace root to a Changeset. New packs must use an unused character identifier and npm package name. Existing packs remain under code-owner review; a pull request cannot assume permission to overwrite or replace another creator's package or artwork.
