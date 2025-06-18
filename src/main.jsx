import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { VitaliaContextProvider } from './contexts/vitaliaContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <VitaliaContextProvider>
      <App />
    </VitaliaContextProvider>
  </BrowserRouter>,
)
