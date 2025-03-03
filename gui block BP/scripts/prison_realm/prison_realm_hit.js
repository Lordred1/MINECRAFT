world.afterEvents.entityHitEntity.subscribe(({ damagingEntity: player, hitEntity: target }) => {
    if (player.typeId !== 'minecraft:player') return;
  
    const hand = player.getComponent('minecraft:equippable').getEquipment(EquipmentSlot.Mainhand);
    if (!hand) return;
  
    switch (hand.typeId) {
      case 'gui:prison_realm': {
        player.runCommandAsync('function banish')
        break;
      }
      default: break;
    }
  });