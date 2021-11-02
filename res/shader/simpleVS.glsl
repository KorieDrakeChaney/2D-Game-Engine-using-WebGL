#version 300 es    

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec4 aColor;
layout (location = 2) in vec2 aTextureCoord;
layout (location = 3) in float aTextureIndex;


out vec4 vertexColor;
out vec2 textureCoord;
out float textureIndex;


void main(void){
    gl_Position =   vec4(aPos, 1.0);
    vertexColor = aColor;
    textureCoord = aTextureCoord;
    textureIndex = aTextureIndex;
}