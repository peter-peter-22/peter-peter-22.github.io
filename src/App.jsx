import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './assets/theme.js'
import { Layout } from './components/routes/layout/Layout.jsx'
import { Home } from './components/routes/routes/Home.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default App