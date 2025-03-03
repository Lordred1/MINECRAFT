import { world, system } from "@minecraft/server"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source

    if (data.itemStack.typeId == "gui:golden_heart") system.run(() => main(player))}
)

function main(player){
    console.warn("wlfnjhwefjk")
    player.runCommandAsync('effect @s health_boost 300 1 true')
    player.runCommandAsync('effect @s absorption 300 3 true')
}