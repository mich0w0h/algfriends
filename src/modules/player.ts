import * as PIXI from "pixi.js"; // import all for gsap register
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
gsap.registerPlugin(PixiPlugin);
// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);

// Scene1のみの仕様
export default class Player {
  public container: PIXI.Container = new PIXI.Container();

  private readonly image = "/src/assets/images/animal_dog_back.png";
  private readonly stepToGoal: number = 15;
  private readonly goalScale: number = 0.2;

  private startPos: PIXI.ObservablePoint;
  private goalPos: PIXI.ObservablePoint;
  private stepNum: number;

  constructor(startPos: PIXI.ObservablePoint, goalPos: PIXI.ObservablePoint) {
    // set props
    this.stepNum = 0;
    this.startPos = startPos;
    this.goalPos = goalPos;

    this.container.position.set(startPos.x, startPos.y);

    // init sprite
    const sprite = PIXI.Sprite.from(this.image);
    sprite.anchor.set(0.5);
    this.container.addChild(sprite);
  }

  moveForward() {
    // until goal position and scale
    if (this.stepNum === this.stepToGoal) {
      return;
    }
    this.stepNum += 1;
    gsap.to(this.container, {
      duration: 0.1,
      pixi: {
        scale: this.container.scale.x - (1 - this.goalScale) / this.stepToGoal,
        positionY:
          this.container.position.y +
          (this.goalPos.y - this.startPos.y) / this.stepToGoal,
      },
    });
  }
}
