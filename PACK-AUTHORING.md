# Pack authoring

A Peekling character pack is a data-only npm package. It cannot include executable character behavior.

## Required public files

A publishable pack must include `package.json`, `character.json`, `thumbnail.png`, `LICENSE`, `README.md`, and every atlas referenced by `character.json`. Include `NOTICE` whenever the pack's license or attribution record requires it. Every official Apache-2.0 pack includes `NOTICE`.

The package name must use the official package form `@peekling/pack-*`. The package and character versions and license identifiers must agree. `character.json` must name at least one safe relative atlas path and record each atlas density, source cell size, and SHA-256 hash. Official packs currently include 1x, 2x, and 4x variants.

`thumbnail.png` is required package artwork. Development scripts, tests, generated reports, and source art stay outside the npm archive.

## Local checks

Run `npm run build` to rebuild all official atlases and run art QA. Run `npm run pack:check` to inspect all package dry-runs. Run `npm run check` before preparing a release.

When package metadata changes, run `npm run roster` to regenerate the root package table.

## Release records

Add a Changeset for any change that should create a new published package version. Select only the affected pack workspaces and use patch, minor, or major according to the compatibility impact. Do not add the private workspace root to a Changeset.
