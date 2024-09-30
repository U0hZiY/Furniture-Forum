import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState('16');
  const [color, setColor] = useState('#000000');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里应该添加实际的发帖逻辑，包括图片上传和文本样式
    console.log('New post:', { title, content, category, image, font, fontSize, color });
    // 假设发帖成功，重定向到首页
    navigate('/');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="create-post-page page-content"> {/* 添加 page-content 类 */}
      <h2>发布新帖子</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">标题</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="请输入帖子标题"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">分类</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">请选择分类</option>
            <option value="living-room">客厅</option>
            <option value="bedroom">卧室</option>
            <option value="kitchen">厨房</option>
            <option value="bathroom">浴室</option>
            <option value="office">办公室</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="content">内容</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="请输入帖子内容"
            style={{ fontFamily: font, fontSize: `${fontSize}px`, color }}
          />
        </div>
        <div className="text-formatting">
          <div className="form-group">
            <label htmlFor="font">字体</label>
            <select id="font" value={font} onChange={(e) => setFont(e.target.value)}>
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
              <option value="Palatino">Palatino</option>
              <option value="Garamond">Garamond</option>
              <option value="Bookman">Bookman</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
              <option value="Arial Black">Arial Black</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fontSize">字号</label>
            <select id="fontSize" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
              {[12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48].map(size => (
                <option key={size} value={size}>{size}px</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="color">颜色</label>
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">上传图片</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && (
            <div className="image-preview">
              <img src={image} alt="Preview" />
            </div>
          )}
        </div>
        <button type="submit" className="submit-btn">发布帖子</button>
      </form>
    </div>
  );
}

export default CreatePost;

// 注释：
// 这是创建新帖子的组件。
// 包含了标题、分类、内容、文本格式化和图片上传功能。
// handleSubmit 函数处理帖子提交逻辑，实际应用中需要连接到后端API。
// 文本格式化选项（字体、字号、颜色）可以根据需要添加或删除。
// 图片上传预览功能可以根据需要进行调整。