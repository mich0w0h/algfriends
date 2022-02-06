import { Sprite, ObservablePoint } from "pixi.js";

// Scene1のみの仕様
export default class Player {
  public sprite: Sprite;

  private readonly stepToGoal: number = 15;
  private readonly goalScale: number = 0.2;

  private goalY: number;
  private stepNum: number;

  private playerStartPos: ObservablePoint;

  constructor(texturePath: string, screenWidth: number, screenHeight: number) {
    // set props
    this.goalY = screenHeight * 0.25;
    this.stepNum = 0;
    this.playerStartPos = new ObservablePoint(
      () => {
        return;
      },
      null,
      screenWidth * 0.5,
      screenHeight * 0.7
    );

    // init sprite
    this.sprite = Sprite.from(texturePath);
    this.sprite.anchor.set(0.5);
    this.sprite.position.set(this.playerStartPos.x, this.playerStartPos.y);
  }

  moveForward() {
    // until goal position and scale
    if (this.stepNum === this.stepToGoal) {
      return;
    }
    this.stepNum += 1;
    this.sprite.scale.set(
      this.sprite.scale.x - (1 - this.goalScale) / this.stepToGoal
    );
    this.sprite.position.y +=
      (this.goalY - this.playerStartPos.y) / this.stepToGoal;
  }
}
