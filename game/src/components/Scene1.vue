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
const stepToGoal: number = 15;
const goalY: number = app.screen.height * 0.25;
const goalScale: number = 0.2;
let stepNum: number = 0;

const playerStartPos: PIXI.ObservablePoint = new PIXI.ObservablePoint(
  () => {},
  null,
  app.screen.width * 0.5,
  app.screen.height * 0.7
);

// create player object
const player = PIXI.Sprite.from("/src/assets/images/animal_dog_back.png");
player.anchor.set(0.5);
player.position.set(playerStartPos.x, playerStartPos.y);
app.stage.addChild(player);

// Make stage interactive so you can click on it too
app.stage.interactive = true;
app.stage.hitArea = app.renderer.screen;

// click to moveforward player
app.stage.addListener("click", (e) => {
  moveForward();
});

function moveForward() {
  if (stepNum === stepToGoal) {
    return;
  }
  stepNum += 1;
  player.scale.set(player.scale.x - (1 - goalScale) / stepToGoal);
  player.position.y += (goalY - playerStartPos.y) / stepToGoal;
}
</script>

<template></template>

<style scoped></style>
