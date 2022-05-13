import { createRoot } from 'react-dom/client';
import App from "./App";


// export default function index() {
//   return (
//     render(<App />, document.getElementById('root'))
//   );
// }


createRoot(document.getElementById("root")).render(<App />);
