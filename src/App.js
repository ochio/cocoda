import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <form>
          <div>
            <label>メールアドレス</label>
            <input type="email" name="email"/>
          </div>
          <div>
            <label>パスワード</label>
            <input type="email" name="email"/>
          </div>
          <button type="submit" >ログイン</button>
        </form>
      </div>
    </div>
  );
}

export default App;
