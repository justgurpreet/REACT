import { observer } from 'mobx-react'

export const Counter = observer(({ store: { count } }) => {
    return <div>{count}</div>;
  });

  export const DoubleCounter = observer(({ store: { doubleCount } }) => (
    <div>{doubleCount}</div>
  ));