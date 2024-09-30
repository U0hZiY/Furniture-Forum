import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'; // 导入 Search 组件

// 示例帖子数据
const initialPostsData = [
  {
    id: 1,
    title: "北欧风格家居设计趋势",
    content: "北欧风格一直是很多人喜爱的家居设计风格，简洁、实用又不失温馨。最近有什么新的北欧风格设计趋势吗？",
    author: "设计爱好者",
    likes: 156,
    image: "https://example.com/images/nordic-style.jpg",
  },
  {
    id: 2,
    title: "小户型空间优化技巧",
    content: "对于城市中的小户型来说，如何合理利用每一寸空间都是一门学问。大家有什么好的空间优化技巧可以分享吗？",
    author: "蜗居达人",
    likes: 203,
    image: "https://example.com/images/small-apartment.jpg",
  },
  {
    id: 3,
    title: "2023年最受欢迎的厨房设计",
    content: "厨房是家的心脏，好的设计能让烹饪变得更加愉悦。今年有哪些流行的厨房设计值得尝试？",
    author: "美食家",
    likes: 178,
    image: "https://example.com/images/modern-kitchen.jpg",
  },
  {
    id: 4,
    title: "如何选择适合自己的沙发",
    content: "沙发是客厅的主角，选择一款合适的沙发对于提升居家舒适度很重要。大家在选购沙发时会考虑哪些因素？",
    author: "家具顾问",
    likes: 220,
    image: "https://example.com/images/comfortable-sofa.jpg",
  },
  {
    id: 5,
    title: "植物如何为家居增添生机",
    content: "室内植物不仅能净化空气，还能为家增添自然气息。大家喜欢在家中摆放哪些植物？有什么养护技巧吗？",
    author: "绿植爱好者",
    likes: 189,
    image: "https://example.com/images/indoor-plants.jpg",
  },
  {
    id: 6,
    title: "卧室照明设计的艺术",
    content: "好的照明能营造舒适的卧室氛围，影响我们的睡眠质量。大家对卧室照明有什么独到见解？",
    author: "灯光设计师",
    likes: 245,
    image: "https://example.com/images/bedroom-lighting.jpg",
  }
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [posts, setPosts] = useState(initialPostsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 每5秒切换一次图片

    return () => clearInterval(interval);
  }, [posts.length]);

  const handleLike = (postId) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === postId ? {...post, likes: post.likes + 1, isLiked: true} : post
    ));
  };

  return (
    <div className="content">
      <div className="top-actions">
        <Link to="/create-post" className="btn-create-post">
          <span className="post-icon">✎</span>
          <span className="post-text">发布</span>
        </Link>
        <Search />
      </div>
      
      <div className="hero-section">
        <img 
          src={posts[currentImageIndex].image} 
          alt={posts[currentImageIndex].title} 
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>家具特勤组</h1>
          <p>专业家具设计交流平台</p>
        </div>
      </div>
      <section className="featured-posts">
        <h2>热门话题</h2>
        <div className="post-grid">
          {posts.slice(0, 3).map(post => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt={post.title} />
              <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
              <p>{post.content.substring(0, 100)}...</p>
              <span className="post-info">
                by {post.author} | 
                <button 
                  onClick={() => handleLike(post.id)} 
                  className={`like-button ${post.isLiked ? 'liked' : ''}`}
                >
                  <span className="like-icon">❤</span> {post.likes}
                </button>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="latest-posts">
        <h2>最新帖子</h2>
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
              <span className="post-info">
                by {post.author} | 
                <button 
                  onClick={() => handleLike(post.id)} 
                  className={`like-button ${post.isLiked ? 'liked' : ''}`}
                >
                  <span className="like-icon">❤</span> {post.likes}
                </button>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;

// 注释：
// 这是首页组件，包含了轮播图、热门话题和最新帖子。
// 轮播图数据来源于 posts 数组，可以通过修改 initialPostsData 来更改内容。
// 热门话题显示前三个帖子，可以通过修改 slice(0, 3) 来调整显示数量。
// handleLike 函数处理点赞逻辑，可以根据需要修改。