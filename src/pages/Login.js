import React, { Component } from 'react';

class Login extends Component {
  render(){
    return(
      <div className="login">
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
        <a href="#">パスワードをお忘れの方</a>
        <a href="#">アカウントをお持ちでない方</a>
      </div>
    )
  }
}

export default Login;