import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Post from './Post';
import Login from './Login';
import Register from './Register';
import CreatePost from './CreatePost';
import Categories from './Categories';
import CategoryDetail from './CategoryDetail';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="container">
            <h1><Link to="/">家具特勤组</Link></h1>
            <nav>
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/categories">分类</Link></li>
                <li><Link to="/about">关于我们</Link></li>
                <li><Link to="/login">登录</Link></li>
                <li><Link to="/register">注册</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          <div className="container">
            <p>© 2023 OddsMedia 版权所有</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

// 注释：
// 这是应用的主要组件，包含了整体布局和路由设置。
// 如需添加新页面，在 <Routes> 中添加新的 <Route> 即可。
// 要修改导航栏，编辑 <nav> 部分的内容。
// 页脚信息可以在 <footer> 部分修改。