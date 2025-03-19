import { world, system, ItemStack } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    
    if (data.itemStack.typeId == "gui:true_miners_pick") system.run(() => main(player))}
)
function main(player){
    console.warn("h")
    player.runCommandAsync('enchant @s efficiency 5')
    player.runCommandAsync('enchant @s unbreaking 3')
    player.runCommandAsync('effect @s night_vision 300 1 true')
    player.runCommandAsync('enchant @s fortune 3')
    player.runCommandAsync('effect @s haste 300 3 true ')
}