import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里添加实际的登录逻辑
    console.log('Login attempt:', email, password);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>登录</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="邮箱"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="密码"
            />
          </div>
          <button type="submit" className="submit-btn">登录</button>
        </form>
        <div className="social-login">
          <button className="social-btn google">使用Google登录</button>
          <button className="social-btn facebook">使用Facebook登录</button>
        </div>
        <p className="auth-switch">
          还没有账号？ <Link to="/register">立即注册</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

// 注释：
// 这是登录页面组件。
// handleSubmit 函数处理登录逻辑，实际应用中需要连接到后端API。
// 社交媒体登录按钮目前只有UI，需要添加实际的登录逻辑。
// 可以根据需要修改表单字段或添加额外的登录选项。