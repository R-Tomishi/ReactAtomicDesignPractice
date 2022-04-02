import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "rtomishi",
  image:
    "https://unsplash.com/photos/NE0XGVKTmcA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8ZG9nfGVufDB8fHx8MTY0ODc1NzkwMw&force=true",
  email: "12345@example.com",
  phone: "090-9999-5555",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
