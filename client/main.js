import React from 'react';
import { mount } from 'react-mounter';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const store = observable({
  a: 0,
  b: 0,
});

const Item1 = observer(({ a }) => (
  <div>
    <h1>Item 1</h1>
    <p>Value: {a}</p>
    <button onClick={() => store.a++ }>Increment state a</button>
    {console.log('Rendered Item1')}
  </div>
));

const Item2 = observer(({ b }) => (
  <div>
    <h1>Item 2</h1>
    <p>Value: {b}</p>
    <button onClick={() => store.b++ }>Increment state b</button>
    {console.log('Rendered Item2')}
  </div>
));

const Main = observer(() => {
  const { a, b } = store;

  return (
    <div>
      <Item1 a={a} />
      <Item2 b={b} />
    </div>
  );
});

mount(Main);
