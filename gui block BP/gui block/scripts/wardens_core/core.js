import { world, system, ItemStack } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    
    if (data.itemStack.typeId == "gui:wardens_core") system.run(() => main(player))}
)
function main(player){
    console.warn("Wardens Core Event Handler Works")
    
   let titleofmenu = "§bYOU SURE THAT THIS IS WHAT §4YOU §bWANT?"
   const form = new ActionFormData()
   .title(titleofmenu)
   .button("§4YES")
   .button("§bNO")
   form.show(player).then(r => {
    if(r.selection == 0) WardenBuff(player)
    if(r.selection == 1) ExitHandle(player)
   })
}
function WardenBuff(player){
    console.warn("yes")

   //not needed but will leave                                           player.runCommandAsync('tellraw @a {"rawtext":[{"text":"Welp I Guess This Is It"}]}')
    player.runCommandAsync('say §bHey You Dam Basterd Ill Be Dying First')
    player.runCommandAsync('summon minecraft:warden ~ ~ ~')
    player.runCommandAsync('tag @e[type=minecraft:warden] add Lebron')
   //player.runCommandAsync('execute ')
    player.runCommandAsync('effect @e[tag=Lebron] speed infinite 3 true')
    player.runCommandAsync('effect @e[tag=Lebron] strength infinite 3 true')
    player.runCommandAsync('clear @s gui:wardens_core 0 1')
    player.runCommandAsync('scoreboard players set @s WardenTimer 1000')
    player.runCommandAsync('effect @e[tag=Lebron] wither infinite 3 true')
}
function ExitHandle(player){
    console.warn("no")

    player.runCommandAsync('tellraw @s {"rawtext":[{"text":"§bScared Are You?"}]}')
}
/*function Kys(player){
    player.runCommandAsync('kill @e[name=Lebron]')
}*/



