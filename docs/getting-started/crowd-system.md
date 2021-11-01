# Crowd System

Zino Instanced Skeletal Mesh includes a built-in crowd system allowing to easily make crowds with a low performance cost since generally you don't need to have a per-instance animation for these. It is greatly inspired from Unreal's animation sharing system, but simpler. The system works by creating multiple "buckets" per animation state, each bucket has its own animation blueprint ticking. All of this use the Master Pose Component.

## Setup
First, you need to create a `Crowd System Setup` asset, this will tell the system what animation states there are and what animation blueprint to use.

![Crowd System Setup](/img/docs/getting-started/crowd-1.png)

![Crowd System Setup Asset Editor](/img/docs/getting-started/crowd-2.png)

`Skeleton` defines what skeleton is going to be used, because the crowd system works across different skeletal meshes if they are using the same skeleton.

`States` is used to declares all animation states that you're going to use, each state has a `Gameplay Tag` field used to associate a unique identifier per state. If you don't know what a Gameplay Tag is, we recommend reading Unreal's official documentation.
`Bucket Count` is used to tell how many buckets the crowd system will create for this state, more buckets mean more diversity in animation but a much higher animation cost. 

## Register a actor
After you have setup your `Crowd System Setup` asset, you can create a manager associated with your system and register actors:

![Crowd System Example](/img/docs/getting-started/crowd-3.png)

## Switch state
To switch state, you can use the `Request State Change` function.

![Crowd System Switch](/img/docs/getting-started/crowd-4.png)

## Unregister a actor
After you finished with your actor, don't forgot to unregister it.
The system will automaticly unregister destroyed actor so it is not necessary to unregister actor before destroying them.

![Crowd System Unregister](/img/docs/getting-started/crowd-5.png)