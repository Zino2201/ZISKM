---
id: FAQ
sidebar_position: 3
---

# FAQ

## How does it works ?
The plugin works by batching drawcalls of skeletal mesh instances like the `InstancedStaticMesh` component. Bones are stored in a big per section per LOD buffer fetched at rendering time by the vertex shader.

## Does it include an optimized path finding solution ?
No. The goal of the plugin is to optimize the rendering only. You may try out some plugins out there or try implemeting your own solution if you encounter any problems with Unreal's default path finding solution.

## Can I batch animations like a crowd system ?
No, this feature may be implemented later on.

## How can I profile the plugin performances ?
You can open up the stat category of the plugin using the `stat ZISKM` command.

## How can I improve animation performances ?
Ensure you have properly configured LODs, these are used to reduce animation ticking rate.

## Does it support clothing ?
Not yet.