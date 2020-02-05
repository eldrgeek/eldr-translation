import { CurrentModule, React, useApp } from '../CurrentModule';
import Attribution from './ZAttribution';
import MediaPlayer from './MediaPlayer';
import TranslationDisplay from './TranslationDisplay';
const App = () => {
  const { state, actions } = useApp();

  return (
    <React.Fragment>
      <section className="todoapp">
        <header className="header">
          <h1>Translation</h1>
        </header>
        <MediaPlayer />
        <TranslationDisplay />
        <section className="main" />
      </section>
      <Attribution />
    </React.Fragment>
  );
};

export default App;
CurrentModule(App);
