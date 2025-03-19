import { world, Dimension, system, ScoreboardObjective } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data =>{
    let player = data.source

    if (data.itemStack.typeId == "gui:space_rift") system.run(() => main(player))}
)

function main(player){
        
        let title = "§3Rift In Worlds"
        const riftForm = new ActionFormData()
        .title(title)
        .button("§1Go To The Rift")
        .button("§9Go to World Spawn")
        .button("§4Exit")
        riftForm.show(player).then(r => {
            //commented due to new js file
            //if(r.selection == 0) Bannish(player)
            if(r.selection == 0) rift(player)
            if(r.selection == 1) zero(player)
                }
            ) 
    }

function build(player){
    //player.
    player.runCommandAsync('execute if entity @s[tag=unplaced] run structure load rift 29900 200 29500')
    player.runCommandAsync('execute if entity @s[tag=unplaced] run tag @s remove unplaced')
    player.runCommandAsync('execute if entity @s[tag=!unplaced] run tag @s placed')
}

function rift(player){
    player.runCommandAsync('tp @s 29911.05 204.00 29515.80')
}

function zero(player){
    player.runCommandAsync('tp @s 0 72 0')
}