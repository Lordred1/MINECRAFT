tag @a[tag=locked] add removefromrealm
tp @a[tag=removefromrealm] 0 70 0
tag @a remove removefromrealm
tag @a[tag=locked] remove locked


tag @a add opponent
tag @s remove opponent
tag @s add wielder
tag @p[tag=opponent] add locked
structure load "Prison Realm" -50000 250 -50000
tp @a[tag=locked] -49995 254 -49995
tellraw @a[tag=locked] {"rawtext":[{"text":"§cQuick Note From Broden\n You cant leave its surrounded by border blocks and solid void"}]}
effect @a[tag=locked] saturation infinite 255 true
