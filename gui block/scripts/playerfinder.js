import { system, world } from "@minecraft/server"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source

    if (data.itemStack.typeId == "minecraft:dirt") system.run(() => main(player))}
)



function main(player){
    let position = player.getComponent("minecraft:position")
    let x = position.data.x
    let y = position.data.y
    let z = position.data.z

    console.warn(`Player Coordinates: X: ${x}, Y: ${y}, Z: ${z}`)
}