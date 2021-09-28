---
sidebar_position: 1
---
# Quick Start

## Setup
Zino Instanced Skeletal Mesh has no dependencies, so you can just install it directly into your project, compile it and try it out !

## Creating a Actor Blueprint
We will now create a simple actor blueprint.

:::note
In this example, we will create an Actor but you can also use other classes like Pawn or Character as long as they are Characters.
:::
![Blueprint Class Selection](/img/docs/getting-started/2-create-bp.png)

## Adding a ZISKM Skeletal Mesh Component
Open up your Blueprint and add a `ZISKMSkeletalMesh` component.
:::note
In this guide, we are using the `ZISKMSkeletalMesh` component, which allows easily to instantiate skeletal meshes mimicking Unreal Engine's 4.22+ renderer with Static Meshes. For a more complex approach, you may use the `ZISKMInstancedSkeletalMesh` component which use a `InstancedStaticMesh`-like interface and maybe more appropriate with custom ECS systems and such.
:::
![Add Component](/img/docs/getting-started/3-add-comp.png)

A `ZISKMSkeletalMesh` component function like a basic `SkeletalMesh`, you can provide an Anim Blueprint Class and a Skeletal Mesh.

![Blueprint Overview](/img/docs/getting-started/3-bp.png)

## Creating a spawner Actor Blueprint
Now, we are going to create a simple actor blueprint that will create a bunch of ours Actors.
![Generator Blueprint Code](/img/docs/getting-started/4-gen.png)
This simple code will generate about 20 of our Actors aligned on the X axis. 

## Result
![Result](/img/docs/getting-started/5-result.png)

## Going Further
- Change dynamically the skeletal mesh of an instance
- Change dynamically the anim blueprint of an instance
- Use a `Pawn` or `Character` to move your instances!