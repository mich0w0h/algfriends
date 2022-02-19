<script setup lang="ts">
import { Application, Graphics, ObservablePoint } from "pixi.js";
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

// declare params
const startPos: ObservablePoint = new ObservablePoint(
  () => {
    return;
  },
  null,
  app.screen.width * 0.5,
  app.screen.height * 0.7
);
const goalPos: ObservablePoint = new ObservablePoint(
  () => {
    return;
  },
  null,
  startPos.x,
  app.screen.height * 0.25
);

// set background
// const roadBottomWidth = 10;
// let roadFill: Graphics = new Graphics();

// set player
const player = new Player(startPos, goalPos);
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
