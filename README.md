# Peekling characters

This public-intended Git monorepo owns the official data-only Peekling character packs and the tooling that builds, validates, and reviews them. Its npm workspace root is private and is never published. Each `packages/pack-*` workspace is an independently versioned public package.

Peekling on GitHub: [organization](https://github.com/peekling) and [character repository](https://github.com/peekling/peekling-characters).

All 28 current official packs use Apache-2.0. The repository is not a global community catalog. Other creators can publish compatible packs from their own package or static-hosting boundaries.

## Character packages

This table is generated from each workspace's `package.json` and `character.json`. A package name in this table identifies its intended npm package. It does not claim that the version is already published.

<!-- PACK_ROSTER_START -->
| Character | npm Package | Version | Description |
| --- | --- | --- | --- |
| [Bramble](packages/pack-bramble) | `@peekling/pack-bramble` | `0.1.0` | A warm forest bear with a slow, reassuring lumber. |
| [Buns](packages/pack-buns) | `@peekling/pack-buns` | `0.1.0` | A round burger buddy who rolls forward and settles softly. |
| [Byte](packages/pack-byte) | `@peekling/pack-byte` | `0.1.0` | A quick cyber cat with a bright visor and quiet paws. |
| [Crumb](packages/pack-crumb) | `@peekling/pack-crumb` | `0.1.0` | A toast-sized friend who skips without dropping a crumb. |
| [Ember](packages/pack-ember) | `@peekling/pack-ember` | `0.1.0` | A rust-red forest friend with a bright, adventurous streak. |
| [Fable](packages/pack-fable) | `@peekling/pack-fable` | `0.1.0` | A clever terracotta fox always ready for the next trail. |
| [Glint](packages/pack-glint) | `@peekling/pack-glint` | `0.1.0` | A glowing elemental wisp drifting wherever wonder leads. |
| [Halo](packages/pack-halo) | `@peekling/pack-halo` | `0.1.0` | A tiny ringed planet rolling through its own bright orbit. |
| [Luna](packages/pack-luna) | `@peekling/pack-luna` | `0.1.0` | A dreamy moon friend tracing a quiet little orbit. |
| [Mochi](packages/pack-mochi) | `@peekling/pack-mochi` | `0.1.0` | A lavender-eared bunny with soft, springy steps. |
| [Moss](packages/pack-moss) | `@peekling/pack-moss` | `0.1.0` | A mint-green frog who crosses the page in cheerful hops. |
| [Nib](packages/pack-nib) | `@peekling/pack-nib` | `0.1.0` | A curious mole who burrows, scoots, and pops up smiling. |
| [Nori](packages/pack-nori) | `@peekling/pack-nori` | `0.1.0` | A cozy sushi friend with a gentle rice-body shuffle. |
| [Nova](packages/pack-nova) | `@peekling/pack-nova` | `0.1.0` | A cosmic creature who phases gently between little worlds. |
| [Orbit](packages/pack-orbit) | `@peekling/pack-orbit` | `0.1.0` | A round little robot with a cool display and precise tiny steps. |
| [Peek](packages/pack-peek) | `@peekling/pack-peek` | `0.1.0` | A curious kitten-fox who follows pointers and celebrates small wins. |
| [Pip](packages/pack-pip) | `@peekling/pack-pip` | `0.1.0` | A warm-gold corgi who trots into every little celebration. |
| [Purl](packages/pack-purl) | `@peekling/pack-purl` | `0.1.0` | A woolly lamb who bounds forward on cloud-soft feet. |
| [Quill](packages/pack-quill) | `@peekling/pack-quill` | `0.1.0` | A thoughtful scholar owl who flutters between bright ideas. |
| [Rivet](packages/pack-rivet) | `@peekling/pack-rivet` | `0.1.0` | A clockwork beetle who trundles along with careful purpose. |
| [Rook](packages/pack-rook) | `@peekling/pack-rook` | `0.1.0` | A curious raccoon who tiptoes toward every shiny surprise. |
| [Sol](packages/pack-sol) | `@peekling/pack-sol` | `0.1.0` | A sunny companion who floats with a warm, radiant pulse. |
| [Terra](packages/pack-terra) | `@peekling/pack-terra` | `0.1.0` | A pocket-sized Earth gliding with a calm, steady spin. |
| [Tico](packages/pack-tico) | `@peekling/pack-tico` | `0.1.0` | A bright taco friend quick-stepping without spilling a thing. |
| [Tumble](packages/pack-tumble) | `@peekling/pack-tumble` | `0.1.0` | A cheerful cactus wanderer with a tiny western swagger. |
| [Vali](packages/pack-vali) | `@peekling/pack-vali` | `0.1.0` | A brave little slime whose bouncy courage fills the room. |
| [Waddle](packages/pack-waddle) | `@peekling/pack-waddle` | `0.1.0` | A scarf-wrapped penguin with a gentle side-to-side waddle. |
| [Zesty](packages/pack-zesty) | `@peekling/pack-zesty` | `0.1.0` | A lively pizza slice who scoots with a confident tilt. |
<!-- PACK_ROSTER_END -->

Run `npm run roster` after changing a package name, version, title, or description. `npm run roster:check` fails when a row is missing, duplicated, stale, or extra.

## Development

```sh
npm install
npm run check
```

The simplified published-pack boundary contains:

- `package.json`
- `character.json`
- every atlas referenced by `character.json`
- `thumbnail.png`
- `LICENSE`
- `NOTICE` when applicable
- `README.md`

Source material, development scripts, tests, and generated QA reports remain repository-only. See [pack authoring](PACK-AUTHORING.md) for the pack contract.

## Release preparation

Every user-facing package change needs a Changeset that names only the affected `@peekling/pack-*` packages. Changesets creates a release pull request with the version and changelog updates. Publication is a separate protected workflow and publishes only package versions that are not already present in npm.

The future npm trusted publisher must be configured for the exact public GitHub repository and `publish.yml` workflow after the repository and packages exist. The workflow uses OIDC and does not accept a long-lived npm publishing token. See [release preparation](RELEASING.md).

No package or repository is published by the local preparation commands.

## Licensing and attribution

Original repository tooling, tests, and documentation are Apache-2.0. Each current official pack also has its own Apache-2.0 `LICENSE` and `NOTICE`. Atlas hashes and author and license metadata are validated against the package manifest without requiring additional policy files. See [licensing and attribution](LICENSING.md).

Generated QA output belongs in `artifacts/` and is not package content.
