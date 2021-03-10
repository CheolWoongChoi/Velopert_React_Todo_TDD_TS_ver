import * as React from 'react';
import classNames from 'classnames';
import styles from './App.scss';
import TodoApp from '@src/components/Todo/TodoApp';
// import Profile from '@src/components/Profile';
// import Counter from '@src/components/Counter';

const cx = classNames.bind(styles);

function App() {
  return <TodoApp />;
}

export default App;
