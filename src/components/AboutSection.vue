<template>
  <section class="about-section" id="about-detail">
    <div class="about-mask"></div>
    <div class="about-card">
      <h2>关于我</h2>
      <p>这里是详细的个人介绍内容。你可以介绍自己的学习、工作经历、兴趣爱好、技术栈等。内容可自由扩展。</p>
      <ul>
        <li>热爱前端开发，熟悉 Vue、React 等主流框架</li>
        <li>有丰富的项目经验，注重用户体验和界面设计</li>
        <li>喜欢开源、分享和团队协作</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  background: #181c2a;
}
.about-mask {
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  background: #181c2a;
  opacity: 0.7;
  z-index: 1;
  pointer-events: none;
}
.about-card {
  position: relative;
  z-index: 2;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(64,158,255,0.08);
  padding: 48px 40px;
  max-width: 700px;
  width: 90vw;
  color: #232946;
  font-family: 'Inter', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}
.about-card h2 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 24px;
}
.about-card p {
  font-size: 1.15rem;
  margin-bottom: 18px;
  color: #555;
}
.about-card ul {
  padding-left: 20px;
  color: #555;
  font-size: 1.05rem;
}
.about-card li {
  margin-bottom: 10px;
}
@media (max-width: 700px) {
  .about-card {
    padding: 24px 10px;
    border-radius: 10px;
  }
  .about-card h2 {
    font-size: 1.3rem;
  }
}
</style> 