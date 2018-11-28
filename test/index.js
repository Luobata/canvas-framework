import core from '../src/index';

window.onload = () => {
    const canvas = new core.canvas({
        width: 800,
        height: 800,
    });
    const a = new core.rectangular();
    canvas.add(a);

    document.body.appendChild(canvas.dom);
    canvas.render();
    // const b = new core.shape();
};
