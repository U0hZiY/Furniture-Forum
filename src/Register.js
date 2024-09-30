import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里添加实际的注册逻辑
    console.log('Register attempt:', username, email, password);
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>注册</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="用户名"
            />
          </div>
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
          <button type="submit" className="submit-btn">注册</button>
        </form>
        <div className="social-login">
          <button className="social-btn google">使用Google注册</button>
          <button className="social-btn facebook">使用Facebook注册</button>
        </div>
        <p className="auth-switch">
          已有账号？ <Link to="/login">立即登录</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

// 注释：
// 这是注册页面组件。
// handleSubmit 函数处理注册逻辑，实际应用中需要连接到后端API。
// 社交媒体注册按钮目前只有UI，需要添加实际的注册逻辑。
// 可以根据需要修改表单字段或添加额外的注册选项。