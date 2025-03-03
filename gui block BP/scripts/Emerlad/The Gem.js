import { world, system, EntityInventoryComponent, ItemStack, ItemUseOnBeforeEvent } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"


world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    
    if (data.itemStack.typeId == "gui:sacred_emerald") system.run(() => main(player))}
)

function main(player){
    console.warn("emerald ran")
    player.runCommandAsync('effect @s village_hero 300 4 true')
}