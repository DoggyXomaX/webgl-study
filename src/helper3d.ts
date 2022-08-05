class Helper3D {
  public static DrawLine(x0: number, y0: number, x1: number, y1: number, color: THREE.ColorRepresentation): THREE.Line {
    const points = [
      new THREE.Vector2(x0, y0),
      new THREE.Vector2(x1, y1)
    ];

    const material = new THREE.LineBasicMaterial({ color });
    const geometryLine = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometryLine, material);
    return line;
  }

  public static DrawCube(width: number, height: number, length: number, color: THREE.ColorRepresentation, isLines: boolean = true): THREE.Mesh {
    const material = isLines ? new THREE.LineBasicMaterial({ color }) : new THREE.MeshBasicMaterial({ color });
    const geometry = new THREE.BoxGeometry(width, height, length);
    const cube = new THREE.Mesh(geometry, material);
    return cube;
  }

  public static DrawCubeTexture(width: number, height: number, length: number, path: string): THREE.Mesh {
    const loader = new THREE.TextureLoader();

    const material = new THREE.MeshBasicMaterial({ map: loader.load(path) });
    const geometry = new THREE.BoxGeometry(width, height, length);
    const cube = new THREE.Mesh(geometry, material);

    return cube;
  }
}