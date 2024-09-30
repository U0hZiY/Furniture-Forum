import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// 示例帖子数据（实际应用中应该从API获取）
const postsData = [
  {
    id: 1,
    title: "北欧风格家居设计趋势",
    content: "北欧风格一直是很多人喜爱的家居设计风格，简洁、实用又不失温馨。最近有什么新的北欧风格设计趋势吗？",
    author: "设计爱好者",
    likes: 156,
    image: "https://example.com/images/nordic-style.jpg",
    comments: [
      { id: 1, author: "极简主义者", content: "我注意到最近的北欧风格更加注重环保材料的使用，比如可回收的木材和布料。", likes: 23, replies: [] },
      { id: 2, author: "色彩控", content: "我觉得北欧风格正在融入更多温暖的色调，不再局限于白色和灰色。", likes: 15, replies: [
        { id: 1, author: "家具达人", content: "没错，暖色调的运用确实能增加空间的舒适感。" }
      ] }
    ]
  },
  // ... 可以添加更多帖子
];

// 假设我们有一个分享函数
const shareToSocialMedia = (platform, postUrl) => {
  // 这里应该是实际的分享逻辑
  console.log(`Sharing to ${platform}: ${postUrl}`);
};

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const foundPost = postsData.find(p => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
      setComments(foundPost.comments);
    }
  }, [id]);

  if (!post) {
    return <div>帖子不存在或正在加载...</div>;
  }

  const handleLike = (commentId) => {
    setComments(prevComments => prevComments.map(comment => 
      comment.id === commentId ? {...comment, likes: comment.likes + 1} : comment
    ));
  };

  const handleReply = (commentId, replyContent) => {
    setComments(prevComments => prevComments.map(comment => 
      comment.id === commentId ? 
      {...comment, replies: [...comment.replies, {id: Date.now(), author: "当前用户", content: replyContent}]} : 
      comment
    ));
  };

  const postUrl = `${window.location.origin}/post/${id}`; // 获取当前帖子的URL

  return (
    <div className="content post-detail">
      <h2>{post.title}</h2>
      <p className="post-info">by {post.author} | 👍 {post.likes}</p>
      {post.image && <img src={post.image} alt={post.title} className="post-image" />}
      <p className="post-content">{post.content}</p>
      
      {/* 社交媒体分享按钮 */}
      <div className="social-share">
        <h4>分享到：</h4>
        <button onClick={() => shareToSocialMedia('WeChat', postUrl)}>微信</button>
        <button onClick={() => shareToSocialMedia('QQ', postUrl)}>QQ</button>
        <button onClick={() => shareToSocialMedia('Link', postUrl)}>复制链接</button>
        <button onClick={() => shareToSocialMedia('Instagram', postUrl)}>Instagram</button>
        <button onClick={() => shareToSocialMedia('Twitter', postUrl)}>Twitter</button>
      </div>

      <div className="comments">
        <h3>评论</h3>
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
            <div className="comment-actions">
              <button onClick={() => handleLike(comment.id)}>👍 {comment.likes}</button>
              <button onClick={() => handleReply(comment.id, prompt("请输入回复内容："))}>回复</button>
            </div>
            {comment.replies && comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="reply">
                    <strong>{reply.author}</strong>
                    <p>{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;

// 注释：
// 这是帖子详情页面组件。
// postsData 数组包含了示例帖子数据，实际应用中应该从API获取。
// handleLike 和 handleReply 函数处理评论的点赞和回复逻辑，可以根据需要修改。
// 评论和回复的渲染逻辑在 return 语句中，可以根据需要调整样式和结构。
// 新增了社交媒体分享功能，包括微信、QQ、链接复制、Instagram和Twitter。
// shareToSocialMedia 函数需要根据实际情况实现，可能需要使用第三方库或API。
// 分享按钮的样式可以在 App.css 中进一步美化。