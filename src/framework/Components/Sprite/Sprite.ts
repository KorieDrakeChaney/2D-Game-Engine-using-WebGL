import { getApplication } from "../../globals";

export default class Sprite{
    vertices : Array<number>;
    indices : Array<number>;

    constructor() {
        this.vertices = null;
        this.indices = null;
    };
}