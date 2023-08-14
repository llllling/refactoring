import { Robot } from "./Robot";

const robot = new Robot("Edward");
robot.order(robot.command.WALK);
robot.order(robot.command.STOP);
robot.order(robot.command.JUMP);
