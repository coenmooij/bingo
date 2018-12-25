export interface HostedGame {
  id: number;
  title: string;
  sessionId: string;
  pin: number;
  balls: number[];
  drawnBalls?: number[];
}
