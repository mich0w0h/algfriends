import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
gsap.registerPlugin(PixiPlugin);
// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);

// Scene1のみの仕様
export default class Player {
  public sprite: PIXI.Sprite;

  private readonly stepToGoal: number = 15;
  private readonly goalScale: number = 0.2;

  private goalY: number;
  private stepNum: number;

  private playerStartPos: PIXI.ObservablePoint;

  constructor(texturePath: string, screenWidth: number, screenHeight: number) {
    // set props
    this.goalY = screenHeight * 0.25;
    this.stepNum = 0;
    this.playerStartPos = new PIXI.ObservablePoint(
      () => {
        return;
      },
      null,
      screenWidth * 0.5,
      screenHeight * 0.7
    );

    // init sprite
    this.sprite = PIXI.Sprite.from(texturePath);
    this.sprite.anchor.set(0.5);
    this.sprite.position.set(this.playerStartPos.x, this.playerStartPos.y);
  }

  moveForward() {
    // until goal position and scale
    if (this.stepNum === this.stepToGoal) {
      return;
    }
    this.stepNum += 1;
    gsap.to(this.sprite, {
      duration: 0.1,
      pixi: {
        scale: this.sprite.scale.x - (1 - this.goalScale) / this.stepToGoal,
        positionY:
          this.sprite.position.y +
          (this.goalY - this.playerStartPos.y) / this.stepToGoal,
      },
    });
  }
}
