// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Button } from '@nx-test-local/button';

export function App() {
  return (
    <div>
      <NxWelcome title="nx-test-local" />
      <Button />
    </div>
  );
}

export default App;
