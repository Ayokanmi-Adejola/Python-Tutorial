import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add Google Analytics or similar
const addAnalytics = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
};

if (process.env.NODE_ENV === 'production') {
  addAnalytics();
}

createRoot(document.getElementById("root")!).render(<App />);
