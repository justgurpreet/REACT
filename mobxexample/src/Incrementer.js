import { observer } from 'mobx-react'

export const Incrementer = observer(({ store }) => {
    return (
      <div>
        <button onClick={() => store.increment()}>increment</button>
      </div>
    );
  });