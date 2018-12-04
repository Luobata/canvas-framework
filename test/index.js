import core from '../src/index';

window.onload = () => {
    const canvas = new core.canvas({
        width: 800,
        height: 800,
    });
    const a = new core.rectangular({
        borderColor: 'red',
        borderWidth: 10,
        boxSizing: 'border-box',
    });
    a.on('click', data => {
        console.log(data);
    });
    canvas.add(a);

    document.body.appendChild(canvas.dom);
    canvas.render();
    // const b = new core.shape();
};
