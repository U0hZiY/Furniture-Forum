import React from 'react';
import { useParams, Link } from 'react-router-dom';

// 示例数据
const categoriesData = {
  1: { id: 1, name: "客厅家具", description: "沙发、茶几、电视柜等" },
  2: { id: 2, name: "卧室家具", description: "床、衣柜、梳妆台等" },
  // ... 其他分类
};

const postsData = [
  { id: 1, title: "如何选择合适的沙发", category: 1, author: "家具达人", likes: 120 },
  { id: 2, title: "小户型客厅布置技巧", category: 1, author: "设计师小王", likes: 95 },
  { id: 3, title: "2023年最流行的床品设计", category: 2, author: "睡眠专家", likes: 150 },
  // ... 更多帖子
];

function CategoryDetail() {
  const { id } = useParams();
  const category = categoriesData[id];
  const categoryPosts = postsData.filter(post => post.category === parseInt(id));

  if (!category) {
    return <div>分类不存在</div>;
  }

  return (
    <div className="category-detail">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <h2>相关帖子</h2>
      <ul className="post-list">
        {categoryPosts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <span className="post-info">by {post.author} | 👍 {post.likes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetail;