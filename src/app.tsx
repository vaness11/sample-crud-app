import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Layout } from './layout/layout';
import { ReactNode } from 'react';

function App(props: { children: ReactNode}) {
  return (
    <Layout>
      {props.children}
    </Layout>
  );
}

export default App;
