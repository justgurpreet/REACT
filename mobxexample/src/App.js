import {store} from './Count';
import {Incrementer} from './Incrementer';
import {Counter, DoubleCounter} from './Counter';

export default function App() {
    return (
      <div>
        <Incrementer store={store} />
        <Counter store={store} />
        <DoubleCounter store={store} />
      </div>
    );
  };