<script setup lang="ts">
import * as PIXI from "pixi.js";

const app: PIXI.Application = new PIXI.Application({
  width: screen.availWidth,
  height: screen.availHeight,
  backgroundColor: 0xf0f0f,
});

document.body.appendChild(app.view);

const player = PIXI.Sprite.from("/src/assets/images/animal_dog_back.png");
player.anchor.set(0.5);
player.position.set(app.screen.width / 2, app.screen.height / 2);

app.stage.addChild(player);
</script>

<template></template>

<style scoped></style>
