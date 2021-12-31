import Entity from "../../Framework/Components/Entity.js";
import Sprite from "../../Framework/Components/Renderer/Sprite.js";
import Transform from "../../Framework/Components/Physics/Transform.js";
import vec2 from '../../math/vec2.js'
import vec4 from '../../math/vec4.js'


export var Player = (function(){

    this.player = new Entity("Player");

    this.player.Ready = function(){
        this.addComponent(new Transform(new vec2([Math.random() * 2 - 1, Math.random() * 2 - 1]), new vec2([0.025, 0.025])));
        this.addComponent(new Sprite());
        let sprite = this.findComponent("Sprite");
        sprite.color = new vec4([Math.random(), Math.random(), Math.random(), 1]);
    };
    
    this.player.Update = function(){
        let transform = this.findComponent("Transform");
        transform.rotation = Date.now() / 1000;
    };

});

