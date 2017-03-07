import Vector from '../vector';
import { settings } from '../globals';

/**
 * The doors that separate one map to the next.
 */
class Door {

  constructor(pos) {
    this.pos = pos.plus(new Vector(0.1, 0.1));
    this.size = new Vector(5.2, 10.3);
    this.type = 'door';
    this.actorType = 'item';
    this.coords = {
      left: this.pos.x,
      right: this.pos.x + this.size.x,
      top: this.pos.y,
      bottom: this.pos.y + this.size.y,
    };
  }

}

export default Door;