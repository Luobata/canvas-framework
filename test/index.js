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
    const d = new core.circle(
        {
            x: 400,
            radius: 20,
        },
        {
            zIndex: 10,
        },
    );
    const e = new core.circle({
        x: 430,
        radius: 20,
        backgroundColor: 'red',
    });
    const f = new core.image({
        x: 430,
        y: 430,
        width: 100,
        height: 100,
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
    canvas.add(e);

    document.body.appendChild(canvas.dom);
    f.load(
        'http://sf3-ttcdn-tos.pstatp.com/obj/web.business.image/201902135d0d38ffba7c95434b1097e7',
    ).then(() => {
        canvas.add(f);
        canvas.render();
    });
    // const b = new core.shape();
};
