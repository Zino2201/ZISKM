# Optimization

Here is some tips to improve performance if you encounter diffculties with big instances count.

:::note
Most performance problems will arise from ticking, AI and not the plugin generally, but if you go high in instance count you may hit some limits of the plugin. Note that we have plans to expand the possibilities of the plugin.
:::

## Animation related
- Ensure you have a low bone count, more bones = more animation computing time
- Ensure you have properly configured optimization parameters, available in the Details panel of a `UZISKMInstancedSkeletalMeshComponent`, these are used to reduce animation ticking rate. More informations in the animation ticking rate page. **This is extremly important and is an important part of the plugin.**
- Ensure you have a simple animation blueprint
- Do not abuse interpolation

For additional tips related to the animation system of Unreal, checks https://docs.unrealengine.com/4.26/en-US/AnimatingObjects/SkeletalMeshAnimation/Optimization/

## Ticking related
- Try to tick less if possible, using ticking optimizations (e.g based on distance, on LODs etc)
- Note that it's better to have one big subsystem or actor tick with a big operation than multiple actors ticking with a small operation in Unreal Engine due to the actor components nature
- Document yourself on data-oriented design to go further

## Rendering related
- Ensure that you don't have complex materials
- Ensure that you don't have complex LODs, less triangles to render is better
