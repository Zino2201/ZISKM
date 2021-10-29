# Custom ECS (C++)

## Introduction
Even though the plugin provides an Unreal actor component and use Unreal's native systems to provide animation, you can totally plug in your own ECS and animation system if required. For now, we do not provide a solution to use the animation blueprint without actor components but we have it working, it may come later :eyes:

## `FZISKMInstanceManager`
The main class you will be interacting with is `FZISKMInstanceManager`, it is the class responsible for managing all instances and feeding the correct data to the renderer. This class can then be used to spawn a proxy (see `FZISKMInstancedSkeletalMeshProxy`) to render the instances. 

It provides:
- Render thread instance management
- Frustum culling
- LOD management

As a reference, you can see how we implemented this class with `UZISKMInstancedSkeletalMeshComponent`, which is just a wrapper around `USkeletalMeshComponent` that feeds its bone data to `FZISKMInstanceManager` through a world subsystem.