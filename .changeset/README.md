# Changesets

Add a Changeset for every change that should produce a new character-pack version. Select only affected `@peekling/pack-*` packages. The private workspace root is never versioned or published.

Run `npm run changeset` to create a record. After records reach `main`, the release workflow opens or updates one release pull request with package versions and changelogs. Merging that pull request prepares the new versions. Publication remains a separate protected workflow.
