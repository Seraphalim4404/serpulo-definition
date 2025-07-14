Blocks.scatter.ammoTypes.get(Items.lead).splashDamage = 10 * 1.6;
Blocks.scatter.ammoTypes.get(Items.lead).splashDamageRadius = 8 * 1.2;
Blocks.scatter.ammo {
    Items.blastCompound new FlakBulletType(5f, 3){
        
    lifetime = 60f;
    ammoMultiplier = 5f;
    shootEffect = Fx.shootSmall;
    reloadMultiplier = 0.5f;
    width = 6f;
    height = 8f;
    hitEffect = Fx.flakExplosion;
    splashDamage = 22f * 1.5f;
    splashDamageRadius = 24f;

    frontColor = Pal.blastAmmoFront;
    backColor = hitColor = Pal.blastAmmoBack;
    despawnEffect = Fx.hitBulletColor;
    }
}
