(function () {
  const canvas = document.querySelector("[data-shader-gradient]");

  if (!canvas) {
    return;
  }

  const settings = {
    brightness: 0.88,
    color1: [0.1843, 0.1686, 0.1529],
    color2: [0.7843, 0.7137, 0.651],
    color3: [0.5451, 0.502, 0.4588],
    frameRate: 10,
    pixelDensity: 1,
    positionX: -1.4,
    rotationY: 10,
    rotationZ: 50,
    uAmplitude: 1.0,
    uDensity: 1.3,
    uFrequency: 5.5,
    uSpeed: 0.4,
    uStrength: 4.0,
  };

  const gl =
    canvas.getContext("webgl", { antialias: true, alpha: true, powerPreference: "high-performance" }) ||
    canvas.getContext("experimental-webgl", { antialias: true, alpha: true });

  if (!gl) {
    canvas.classList.add("is-static");
    return;
  }

  const vertexShaderSource = `
    attribute vec2 a_position;

    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_brightness;
    uniform float u_positionX;
    uniform float u_rotationY;
    uniform float u_rotationZ;
    uniform float u_amplitude;
    uniform float u_density;
    uniform float u_frequency;
    uniform float u_strength;
    uniform vec3 u_color1;
    uniform vec3 u_color2;
    uniform vec3 u_color3;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;

      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p *= 2.02;
        amplitude *= 0.5;
      }

      return value;
    }

    mat2 rotate2d(float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat2(c, -s, s, c);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= u_resolution.x / u_resolution.y;

      float time = u_time * 0.16;
      float rz = radians(u_rotationZ);
      float ry = radians(u_rotationY);

      p.x += u_positionX * 0.22;
      p *= rotate2d(rz);
      p.x *= 1.0 + sin(ry) * 0.28;

      vec2 flow = p * u_frequency * 0.42;
      flow += vec2(sin(time + p.y * 1.4), cos(time * 0.74 + p.x * 1.2)) * u_amplitude;

      float fieldA = fbm(flow * u_density + vec2(time * 0.9, -time * 0.22));
      float fieldB = fbm(flow * 0.72 - vec2(time * 0.28, time * 0.68));
      float wave = sin((p.x + fieldA * 1.8) * u_strength + time * 1.7);

      float mixA = smoothstep(-0.82, 0.82, wave + fieldA - 0.18);
      float mixB = smoothstep(0.12, 0.92, fieldB);

      vec3 color = mix(u_color1, u_color2, mixA);
      color = mix(color, u_color3, mixB * 0.78);

      float vignette = smoothstep(1.35, 0.18, length(p * vec2(0.86, 1.08)));
      float light = 0.43 + fieldA * 0.28 + vignette * 0.25;
      float grain = (hash(gl_FragCoord.xy + u_time * 4.0) - 0.5) * 0.04;

      color *= light * u_brightness;
      color += grain;
      color = pow(max(color, 0.0), vec3(0.94));

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  function createShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    canvas.classList.add("is-static");
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    canvas.classList.add("is-static");
    return;
  }

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  const locations = {
    position: gl.getAttribLocation(program, "a_position"),
    resolution: gl.getUniformLocation(program, "u_resolution"),
    time: gl.getUniformLocation(program, "u_time"),
    brightness: gl.getUniformLocation(program, "u_brightness"),
    positionX: gl.getUniformLocation(program, "u_positionX"),
    rotationY: gl.getUniformLocation(program, "u_rotationY"),
    rotationZ: gl.getUniformLocation(program, "u_rotationZ"),
    amplitude: gl.getUniformLocation(program, "u_amplitude"),
    density: gl.getUniformLocation(program, "u_density"),
    frequency: gl.getUniformLocation(program, "u_frequency"),
    strength: gl.getUniformLocation(program, "u_strength"),
    color1: gl.getUniformLocation(program, "u_color1"),
    color2: gl.getUniformLocation(program, "u_color2"),
    color3: gl.getUniformLocation(program, "u_color3"),
  };

  let width = 0;
  let height = 0;
  let lastFrame = 0;
  const frameInterval = 1000 / settings.frameRate;
  const start = performance.now();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, settings.pixelDensity));
    const nextWidth = Math.max(1, Math.floor(rect.width * dpr));
    const nextHeight = Math.max(1, Math.floor(rect.height * dpr));

    if (nextWidth === width && nextHeight === height) {
      return;
    }

    width = nextWidth;
    height = nextHeight;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
  }

  function draw(now) {
    resize();

    if (!reduceMotion && now - lastFrame < frameInterval) {
      requestAnimationFrame(draw);
      return;
    }

    lastFrame = now;

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(locations.position);
    gl.vertexAttribPointer(locations.position, 2, gl.FLOAT, false, 0, 0);

    gl.uniform2f(locations.resolution, width, height);
    gl.uniform1f(locations.time, reduceMotion ? 0 : ((now - start) / 1000) * settings.uSpeed);
    gl.uniform1f(locations.brightness, settings.brightness);
    gl.uniform1f(locations.positionX, settings.positionX);
    gl.uniform1f(locations.rotationY, settings.rotationY);
    gl.uniform1f(locations.rotationZ, settings.rotationZ);
    gl.uniform1f(locations.amplitude, settings.uAmplitude);
    gl.uniform1f(locations.density, settings.uDensity);
    gl.uniform1f(locations.frequency, settings.uFrequency);
    gl.uniform1f(locations.strength, settings.uStrength);
    gl.uniform3fv(locations.color1, settings.color1);
    gl.uniform3fv(locations.color2, settings.color2);
    gl.uniform3fv(locations.color3, settings.color3);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    if (!reduceMotion) {
      requestAnimationFrame(draw);
    }
  }

  requestAnimationFrame(draw);
})();
