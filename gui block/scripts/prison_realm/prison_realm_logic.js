import { world, system, EntityInventoryComponent, ItemStack, ItemUseOnBeforeEvent } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    
    if (data.itemStack.typeId == "gui:prison_realm") system.run(() => main(player))}
)

function main(player){
    console.warn("I|T WORKS")
    let title = "§4Prison Realm"
    const prisonrealmForm = new ActionFormData()
    .title(title)
    .body('§cOnly use this to free the victim')
    //.button('Bannish Player Nearest You')
    .button('Realse The Bannished Player')
    .button('Exit')
   prisonrealmForm.show(player).then(r => {
    //commented due to new js file
    //if(r.selection == 0) Bannish(player)
    if(r.selection == 0) Unbannish(player)
    if(r.selection == 1) ExitHandle()
        }
    ) 
}

/*function Bannish(player){
    player.runCommandAsync('function bannish')
}*/

function Unbannish(player){
    player.runCommandAsync('function unbannish')
}

function ExitHandle(){
    console.warn("Prison Realm Menu Closed")
}
