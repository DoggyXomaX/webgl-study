class App {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

  // Objects
  simpleLine: THREE.Line;
  simpleCube: THREE.Mesh;
  textureCube: THREE.Mesh;
  Awake() {
    const aspect = window.innerWidth / window.innerHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, aspect);
    this.renderer = new THREE.WebGLRenderer();

    document.body.appendChild(this.renderer.domElement);
  }

  Start() {
    this.scene.background = new THREE.Color(0x000000);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.position.z = 5;

    this.simpleLine = Helper3D.DrawLine(0, 0, 1, -1, 0xff0000);
    this.simpleCube = Helper3D.DrawCube(1, 1, 1, 0x00ff00);
    this.textureCube = Helper3D.DrawCubeTexture(2, 2, 2, "img/dirt.jpg");

    this.textureCube.position.x += 3;
    this.scene.add(this.simpleLine, this.simpleCube, this.textureCube);
  }

  Update() {
    requestAnimationFrame(() => this.Update());
    this.renderer.render(this.scene, this.camera);
    this.scene.rotateX(1 / 60);
    this.scene.rotateZ(1 / 120);
  }
}