import './App.css';
import SignIn from "./Components/SignIn";
import Line from "./Components/Line";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {

  // 自分がログインしているのかを管理するための変数
  const [user] = useAuthState(auth);

  return (
    <div>

      {/* ログイン状態　＝ true / ログアウト = false */}
      {/* ログインしているなら、lineの画面に飛ぶ */}
      {/* ログアウトなら、サインインの画面に飛ぶ */}

      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;
