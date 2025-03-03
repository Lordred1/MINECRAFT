
import { world, system, EntityInventoryComponent, ItemStack } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    let title = "BackPack Contents"
    if (data.itemStack.typeId == "gui:backpack") system.run(() => main(player))}
)
function main(player){
    console.warn("it runs main function")
    player.runCommandAsync('tellraw @s {"rawtext":[{"text":"The BackPack Has Been Replaced With A Shulker Box (im to lazy to make it work correct"}]}')
    player.runCommandAsync('clear @s gui:backpack')
    player.runCommandAsync('give @s minecraft:shulker_box')
    
   let titleofmenu = "BackPack Menu"
   const form = new ActionFormData()
   .title(titleofmenu)
   .button("Open Storage 1")
   .button("Exit Menu")
   form.show(player).then(r => {
    if(r.selection == 0) openChest(player)
   })
    }

function openChest(player){
    console.warn("it works")
    const container = player.getComponent(EntityInventoryComponent.componentId).container;
    container.addItem(new ItemStack("minecraft:ender_chest"))
  
}