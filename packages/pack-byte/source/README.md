# Byte source

`byte-pose-sheet-v2.png` is Byte's first-party 1536 by 1024 pose source. Its 24 cells establish the cyber-cat model, locomotion phases, visor expressions, and technology performances.

`blueprint.mjs` defines the 100 named states and their timing. `build.mjs` removes the neutral source background, normalizes every pose, adds bounded state-specific effects, and emits dense 16-column atlases at 1x, 2x, and 4x.

Generated Pack files are copied from `artifacts/art/byte/generated-pack` after the Pack and artwork checks pass.
