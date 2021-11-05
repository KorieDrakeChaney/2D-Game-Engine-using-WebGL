import Entity from "../../framework/Components/Entity.js";
import Sprite from "../../framework/Components/Renderer/Sprite.js";
import Transform from "../../framework/Components/Physics/Transform.js";
import vec2 from '../../math/vec2.js'
import vec4 from '../../math/vec4.js'


export var Player = (function(){

    this.player = new Entity("Player");

    this.player.Ready = function(){
        this.addComponent(new Transform(new vec2([0, 0]), new vec2([0.5, 0.5])));
        this.addComponent(new Sprite());
        let sprite = this.findComponent("Sprite");
        sprite.color = new vec4([1, 0.1, 0.4, 1]);
    };
    
    this.player.Update = function(){
        let transform = this.findComponent("Transform");
        transform.rotation = Date.now() / 1000;

    };

});

