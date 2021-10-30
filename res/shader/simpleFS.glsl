#version 300 es

precision mediump float; 


out vec4 FragColor;

in vec4 vertexColor;
in float textureIndex;


void main(void) {
    FragColor = vertexColor;

}