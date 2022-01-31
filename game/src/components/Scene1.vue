<script setup lang="ts">
import * as PIXI from "pixi.js";

// create pixi view
const app: PIXI.Application = new PIXI.Application({
  width: screen.availWidth,
  height: screen.availHeight,
  antialias: true,
  autoDensity: true,
  resolution: devicePixelRatio,
  backgroundColor: 0xf0f0f,
});
document.body.appendChild(app.view);

// props
const goalY = app.screen.height * 0.2;
const goalScale = 0.2;

// create player object
const player = PIXI.Sprite.from("/src/assets/images/animal_dog_back.png");
player.anchor.set(0.5);
player.position.set(app.screen.width * 0.5, app.screen.height * 0.7);
app.stage.addChild(player);

// Make stage interactive so you can click on it too
app.stage.interactive = true;
app.stage.hitArea = app.renderer.screen;

app.stage.addListener("click", (e) => {
  player.scale.set(player.scale.x * 0.85, player.scale.y * 0.85);
  player.position.y -= 70;
});
</script>

<template></template>

<style scoped></style>
