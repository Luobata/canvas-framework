import core from '../src/index';

window.onload = () => {
    const canvas = new core.canvas({
        width: 800,
        height: 800,
    });
    const a = new core.rectangular({
        borderColor: 'red',
        borderWidth: 10,
        borderRadius: 20,
        boxSizing: 'border-box',
    });
    const c = new core.ellipsis({
        radiusX: 20,
    });
    const d = new core.circle({
        x: 400,
        radius: 20,
    });
    const fn = data => {
        console.log(data);
        a.off('click', fn);
    };
    // a.on('click', data => {
    //     console.log(data);
    // });
    a.on('click', fn);
    // canvas.add(a);
    canvas.add(c);
    canvas.add(d);

    document.body.appendChild(canvas.dom);
    canvas.render();
    // const b = new core.shape();
};
