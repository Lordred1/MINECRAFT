import { world, system, EquipmentSlot } from "@minecraft/server"

world.afterEvents.entityHitEntity.subscribe(({ damagingEntity: player, hitEntity: target }) => {
    if (player.typeId !== 'minecraft:player' || target.typeId !== 'minecraft:player') return;

    const hand = player.getComponent('minecraft:equippable').getEquipment(EquipmentSlot.Mainhand);
    if (hand?.typeId == "gui:prison_realm"){
        console.warn("step one done");
        player.runCommandAsync('function bannish')
        
    }
    else{
        
    }
});
