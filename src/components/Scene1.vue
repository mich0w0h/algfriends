<script setup lang="ts">
import { Application } from "pixi.js";
import Player from "../modules/player";

// create pixi view
const app: Application = new Application({
  width: document.body.clientWidth,
  height: document.documentElement.clientHeight,
  antialias: true,
  autoDensity: true,
  resolution: devicePixelRatio,
  backgroundColor: 0xf0f0f,
});

document.body.appendChild(app.view);

// set player
const player = new Player(
  "/src/assets/images/animal_dog_back.png",
  app.screen.width,
  app.screen.height
);
app.stage.addChild(player.sprite);

// Make stage interactive so you can click on it too
app.stage.interactive = true;
app.stage.hitArea = app.renderer.screen;

// click to moveforward player
app.stage.addListener("click", () => {
  player.moveForward();
});
</script>

<template>
  <div />
</template>

<style scoped></style>
