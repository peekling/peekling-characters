# Releasing character packs

Peekling characters uses one Git monorepo and 28 independently versioned npm workspaces. The npm workspace root is private and has a hard publication refusal. Only exact package versions that are absent from npm are release candidates.

## Change flow

1. Make and verify a change in one or more `packages/pack-*` workspaces.
2. Run `npm run changeset` and select every affected pack package. Choose `patch` for compatible fixes or tuning, `minor` for meaningful backwards-compatible additions or substantial creative updates, and `major` for breaking, replacement, or removal changes. The pull request must explain the decision.
3. Merge the ordinary change pull request into `main`.
4. The release preparation workflow opens or updates one release pull request containing version and changelog changes.
5. Review and merge the release pull request.
6. Publication runs only after the main-branch CI gate passes. Changesets publishes package versions that are not already present in npm.

Pull-request CI rejects every change beneath a character package directory that does not name that package in a Changeset. This includes images, manifests, metadata, documentation, tests, and source files. Changesets never guesses a compatibility level from an addition, deletion, or the amount of a diff; the contributor and reviewer own that decision.

## One-time initial publication

The first publication is intentionally manual because npm trusted publishers are configured in package settings after the packages exist.

1. Sign in locally with `npm login` using an npm account that belongs to the `peekling` organization and can publish public packages. Never send or commit an npm token.
2. Confirm the exact candidate list with `npm run release:candidates`.
3. Run `npm run check` and review every `npm pack --dry-run` boundary.
4. After the release set is explicitly approved, run `npm run release` from the verified `main` commit and complete npm's interactive two-factor challenge.
5. Verify every published `name@version` from the public registry before updating the README roster.

Do not run the initial publication until the exact release set has been reviewed and approved.

## Trusted publishing bootstrap

After the initial packages exist, configure each package's npm trusted publisher with these exact values:

- GitHub organization: `peekling`
- Repository: `peekling-characters`
- Workflow filename: `publish.yml`
- Environment: `npm`
- Allowed action: `npm publish`

The workflow uses a GitHub-hosted runner, Node 24, npm's registry URL, disabled package-manager caching in the publish job, and `id-token: write`. It does not accept a long-lived npm token. The public repository and matching `repository` metadata allow npm to generate provenance through trusted publishing.

Protect the GitHub `npm` environment and test one manually dispatched OIDC release before enabling automatic publication. The manual dispatch requires the exact comma-separated `name@version` candidate set and fails if npm's live registry does not match that confirmation.

When trusted publishing is proven for every package, set the repository variable `PEEKLING_AUTO_PUBLISH` to `true`. Thereafter, a successful `Character packs` workflow on `main` starts the publish workflow. The candidate job reruns the complete gate and resolves unpublished versions before the OIDC publish job. Missing or failed CI, a forked head repository, an absent opt-in variable, a mismatched manual release set, or an empty candidate set cannot publish.

## Local commands

- `npm run check` verifies all packs and release configuration.
- `npm run release-plan:check` verifies that PR package changes have intentional Changeset entries when CI supplies the base and head revisions.
- `npm run release:candidates` compares all local package versions with npm and prints only unpublished candidates.
- `npm run changeset` records a package change.
- `npm run version-packages` applies recorded version changes locally for review.
- `npm run pack:check` performs package dry-runs without publishing.

`npm run release` is a publication command, not a preparation command. Run it locally only for the explicitly approved one-time initial release. After trusted publishing is enabled, the protected workflow owns publication.
