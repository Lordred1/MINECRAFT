import { world, system } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    if (data.itemStack.typeId == "gui:copper_core") system.run(() => main(player))}
)

function main(player){
    player.runCommandAsync('summon lightning_bolt ~ ~ ~')
    player.runCommandAsync('effect @s resistance 25 2 true')
    player.runCommandAsync('effect @s regeneration 25 2 true')
    player.runCommandAsync('effect @s strength 25 1 true')
    player.runCommandAsync('effect @s fire_resistance 3 1 true')
    player.runCommandAsync('effect @s instant_damage 1 2 true')
}