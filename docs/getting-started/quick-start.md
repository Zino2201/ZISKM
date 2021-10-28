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
Open up your Blueprint and add a `UZISKMInstancedSkeletalMeshComponent` component.

![Add Component](/img/docs/getting-started/3-add-comp.png)

A `UZISKMInstancedSkeletalMeshComponent` component function like a basic `USkeletalMesh`, you can provide an Anim Blueprint Class and a Skeletal Mesh.

![Blueprint Overview](/img/docs/getting-started/3-bp.png)

You can now select a Skeletal Mesh and a Anim Blueprint.

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