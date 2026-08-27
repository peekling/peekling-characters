# Release preparation

Peekling characters uses one Git monorepo and 28 independently versioned npm workspaces. The npm workspace root is private and has a hard publication refusal.

## Change flow

1. Make and verify a change in one or more `packages/pack-*` workspaces.
2. Run `npm run changeset` and select only the affected pack packages.
3. Merge the ordinary change pull request into `main`.
4. The release preparation workflow opens or updates one release pull request containing version and changelog changes.
5. Review and merge the release pull request.
6. A maintainer runs the protected publish workflow. Changesets publishes only package versions that are not already present in npm.

The publish workflow is intentionally manual and should use the protected `npm` GitHub environment. This keeps publication separate from merging ordinary code.

## Trusted publishing setup

Do not add a long-lived npm publishing token. After the public GitHub repository and npm packages exist, configure each package's npm trusted publisher with the exact GitHub owner, repository, and `publish.yml` workflow filename. If the GitHub `npm` environment is retained, configure that exact environment in npm too.

The trusted-publishing workflow uses a GitHub-hosted runner, Node 24, npm's registry URL, disabled package-manager caching, and `id-token: write`. npm generates provenance automatically for public packages published from a public repository through trusted publishing.

Before account wiring, add the exact public GitHub repository URL to each package's `repository` metadata. npm requires that URL to match the trusted publisher repository. This repository URL is intentionally not guessed before the GitHub repository exists.

## Local commands

- `npm run check` verifies all packs and release configuration.
- `npm run changeset` records a package change.
- `npm run version-packages` applies recorded version changes locally for review.
- `npm run pack:check` performs package dry-runs without publishing.

Do not run `npm run release` locally as a preparation step. The protected workflow owns publication after account-level trusted-publisher setup.
