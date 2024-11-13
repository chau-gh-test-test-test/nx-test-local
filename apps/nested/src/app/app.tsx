// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Icon } from '@nx-test-local/icon';

export function App() {
  return (
    <div>
      <NxWelcome title="nested" />
      <Icon />
    </div>
  );
}

export default App;
