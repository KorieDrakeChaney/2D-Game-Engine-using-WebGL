#version 300 es    


layout (location = 0) in vec3 aPos;

uniform mat4 uModelTransform;
uniform mat4 uViewProjTransform;

out vec4 vertexColor;

void main(void){
    gl_Position =  vec4(aPos, 1.0);
    vertexColor = vec4(aPos, 1);
}