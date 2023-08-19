import { AdvancedLevel } from "./AdvancedLevel";
import { Player } from "./Player";
import { SuperLevel } from "./SuperLevel";

const player = new Player();
player.play(1);
player.upgraceLevel(AdvancedLevel.getInstance());
player.play(2);
player.upgraceLevel(SuperLevel.getInstance());
player.play(3);
