import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

dayjs.extend(customParseFormat)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
