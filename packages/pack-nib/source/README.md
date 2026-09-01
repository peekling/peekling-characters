# Nib source

`nib-racing-sheet-v2.png` is Nib's first-party 1536 by 1024 pose source. Its 24 cells establish the racing-car model, wheel phases, windshield-eye emotions, steering, drifting, and technology performances.

`blueprint.mjs` defines the 100 named states and their timing. `build.mjs` removes the neutral source background, normalizes every pose, draws deterministic rolling-wheel phases and bounded state-specific effects, then emits dense 16-column atlases at 1x, 2x, and 4x.

Generated Pack files are copied from `artifacts/art/nib/generated-pack` after the Pack and artwork checks pass.
