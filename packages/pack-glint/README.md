# `@peekling/pack-glint`

Glint is an independently publishable, data-only character pack for Peekling. It uses the adaptive native v0.1 profile with 64, 128, and 256px source cells.

## Install

```sh
npm install @peekling/pack-glint@0.1.0
```

The package contains `character.json`, its referenced atlases, `thumbnail.png`, and the applicable public legal records. Atlas hashes are recorded in `character.json`. Development scripts, source material, and tests stay in this monorepo and are not published.

Glint is licensed under Apache-2.0. Redistributions must comply with Section 4 of the Apache License 2.0, including its applicable notice-retention requirements. See this package's `LICENSE` and `NOTICE` files.

Run `npm test -w @peekling/pack-glint` to validate the pack, or `npm run build -w @peekling/pack-glint` to rebuild and run artwork QA.
