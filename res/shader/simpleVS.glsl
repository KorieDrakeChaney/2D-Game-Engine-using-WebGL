#version 300 es    


layout (location = 0) in vec3 aPos;


in uniform mat4 uProjMatrix;
out vec4 vertexColor;

void main(void){
    gl_Position =  uProjMatrix * vec4(aPos, 1.0);
    vertexColor = vec4(1, 1, 1, 1);
}