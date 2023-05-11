const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * cos(vUv.y * 10.0 + u_time);
    // vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    // vec3 color = vec3(abs(vUv - 0.5) * 1.9  * (1.0 - distort), 0.9);
    vec3 color = vec3(abs(vUv - 0.5) * 1.9  * (1.0 - distort), 0.8);
    gl_FragColor = vec4(color, 1.0);
}

`;
export default fragmentShader;
