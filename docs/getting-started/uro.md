# Animation Ticking Rate Optimization

Unreal Engine by default provide a optimization system called **Update Rate Optimization** for Skeletal Meshes. It reduces the ticking rate of skeletal meshes using various techniques.
Zino Instanced Skeletal Mesh use this system and provide you an interface to configure it to allow such high instance count while still use animations.

![URO Parameters](/img/docs/getting-started/uro-1.png)

## Parameters
The base parameters are `Update Rate` and `Evaluation Rate`, Update Rate defines the rate (in frames) of the Animation Blueprint getting updated. The evaluation rate determines the rate (in frames) of animation evalutation (which is the processing of your anim graph). These two can be used for crowd in the distance which does not need per-frame processing.

### Distance
`Base Visible Distance Factor Thresholds` allow you to skip frames depending on the screen size. 
By example, a threshold of `0.4` and `0.2` will skip 0 frames if the Screen Size is greater than `0.4`, will skip 1 frame if lower than `0.4`, and will skip 2 frames if lower than `0.2`. 

### LOD
You can also use LODs instead of predefined screen sizes to skip frames.
`Should Use Lop Map` enable the `LOD To Frame Skip Map` map, which maps LOD levels to a number of frame to skip. For example mapping LOD level `1` to `20` means that each `21` frames the component will be updated & evaluated.

### Interpolation
In order to improve animation quality, you can add interpolation between each evaluation of your instances. This will greatly improve quality for instances that tick rarely, at the price of extra performances. `Interpolate Skipped Frames` enable the interpolation and `Max Eval Rate for Interpolation` determines at which animation evaluation rate we stop to interpolate. For example, having a `Max Eval Rate for Interpolation` of `5` means that every instances that evaluate every `5` or more frames will not interpolate.