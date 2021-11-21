# Animation Budget Allocator

Unreal Engine provides a system called Animation Budget Allocator where it will constrains the time taken by skeletal meshes animations by reducing theirs ticking rate depending on the scene. Zino Instanced Skeletal Mesh Component has a native support for this, it can be extremly useful for scenes with a varying number of a given skeletal mesh.

## How to use
Toggle the `bUseAnimationBudget` property in the component's properties.

:::caution
This is incompatible with Animation Update Rate Optimizations !
:::
