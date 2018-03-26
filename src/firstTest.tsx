import * as React from 'react';
import * as ReactDOM from 'react-dom';
const element0 = <h1>Hallo München</h1>;
ReactDOM.render(element0, document.getElementById('root'));

function tick() {
    const date = new Date().toLocaleTimeString();
    const element = (
    <div>
    <h1>Hallo München</h1>
    <h2>It is {date}.</h2>
    </div>
    );
    ReactDOM.render(
    element,
    document.getElementById('root')
    );
}
setInterval(tick, 1000);