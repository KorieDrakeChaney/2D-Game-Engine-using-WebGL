#version 300 es

precision mediump float; 

out vec4 FragColor;

in vec4 vertexColor;

void main(void) {
    FragColor = vertexColor;
}