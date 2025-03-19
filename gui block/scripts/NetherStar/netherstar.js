import { world, system, ItemStack } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    //console.warn("OH DADY JAYDEN")
    if (data.itemStack.typeId == "gui:true_nether_star") system.run(() => main(player))}
)
function main(player){
    console.warn("Nether Star Event Handler Works")
    
   let titleofmenu = "§0YOU SURE THAT THIS IS WHAT §4YOU §0WANT?"

   
   const form = new ActionFormData()
   .title(titleofmenu)
   .button("§9Give Me Strength")
   .button("§o§4KILL THEM ALL")
   .button("§0NO")
   form.show(player).then(r => {
    if(r.selection == 0) Buffing(player)
    if(r.selection == 1) WitherEvent(player)
    if(r.selection == 2) ExitHandle(player)
   })
}

function Buffing(player){
    console.warn("BUFF OPTION WAS USED")
    player.runCommandAsync('effect @s regeneration 30 1 true')
    player.runCommandAsync('effect @s resistance 30 1 true')
    player.runCommandAsync('effect @s strength 30 2 true')
}
function WitherEvent(player){
    console.warn("WITHER OPTION WAS USED")
    player.runCommandAsync('say Death To Us All')
    player.runCommandAsync('summon wither ~ ~ ~')
    player.runCommandAsync('tag @e[type=wither] add Leon')
    player.runCommandAsync('effect @e[tag=Leon] resistance infinite 3 true')
    player.runCommandAsync('effect @e[tag=Leon] regeneration infinite 1 true')
    player.runCommandAsync('gamerule keepinventory true')
    player.runCommandAsync('kill @s')
    player.runCommandAsync('gamerule keepinventory false')
    killNetherStar()

}
function ExitHandle(player){
    console.warn("Exit Handleing for NetherStar")
    player.runCommandAsync('tellraw @s {"rawtext":[{"text":"§4KILL EVERYONE! HESITATION IS DEFEAT"}]}') 
}
