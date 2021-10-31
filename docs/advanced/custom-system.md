# Custom Animation System

## Introduction
Even though the plugin provides an Unreal actor component and use Unreal's native systems to provide animation, you can totally plug in your own ECS or/and animation system if required. For now, we do not provide a solution to use the animation blueprint without actor components but we have it working, it may come later :eyes:

## Simple custom system
You may stop using Unreal's anim blueprint and use the default Play Animation and other functions to create your simple but powerful anim system.

## Going Further
If you want to go further, e.g you have your own ECS system or you have a complete animation system that you want to simply integrate with ZISKM, you will need to interact directly with ZISKM core parts. At this point, ZISKM will only act as a rendering layer and will not provide animation management or other. 

### `FZISKMInstanceManager`
The main class you will be interacting with is `FZISKMInstanceManager`, it is the class responsible for managing all instances and feeding the correct data to the renderer. This class can then be used to spawn a proxy (see `FZISKMInstancedSkeletalMeshProxy`) to render the instances. 

It provides:
- Render thread instance management
- Frustum culling
- LOD management

As a reference, you can see how we implemented this class with `UZISKMInstancedSkeletalMeshComponent`, which is just a wrapper around `USkeletalMeshComponent` that feeds its bone data to `FZISKMInstanceManager` through a world subsystem.