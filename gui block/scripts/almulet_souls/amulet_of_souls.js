import { world, system } from "@minecraft/server"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source

    if (data.itemStack.typeId == "gui:amulet_of_souls") system.run(() => main(player))}
)

function main(player){
    //setTitleAndSubtitle()
    console.warn("amujlet wfewo")
    player.runCommandAsync('tag @s add amulethold')
    //player.runCommandAsync('effect @a[tag=amulethold] instant_damage 1 1')
    player.runCommandAsync('function amulet_spec')
    player.runCommandAsync('schedule delay add amulet_surv 60')
    startCooldown: 200
}

function setTitleAndSubtitle(
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("TEST", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "SUB TEST",
  });
}