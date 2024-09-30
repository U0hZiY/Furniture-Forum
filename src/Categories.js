import React from 'react';
import { Link } from 'react-router-dom';

// 示例分类数据
const categoriesData = [
  { id: 1, name: "客厅家具", description: "沙发、茶几、电视柜等" },
  { id: 2, name: "卧室家具", description: "床、衣柜、梳妆台等" },
  { id: 3, name: "厨房家具", description: "橱柜、餐桌、餐椅等" },
  { id: 4, name: "书房家具", description: "书桌、书柜、办公椅等" },
  { id: 5, name: "户外家具", description: "庭院桌椅、遮阳伞等" },
  { id: 6, name: "儿童家具", description: "儿童床、学习桌、玩具收纳等" },
];

function Categories() {
  return (
    <div className="categories-page">
      <h1>家具分类</h1>
      <div className="categories-grid">
        {categoriesData.map(category => (
          <div key={category.id} className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <Link to={`/category/${category.id}`} className="category-link">查看详情</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;