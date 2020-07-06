# vue-next-admin

## 功能
服务端渲染后台管理系统

### 页面
- /               首页数据统计
- /login          登录页面
- /account/staff  员工列表

### 安装
```
npm install
```

### 使用
```
npm run dev
```

### 部署
- 1、 首先项目放到服务器。`可以利用gitlab ci`
- 2、 安装pm2、nginx
- 3、 使用命令
```
npm run build
npm run start
```
- 4、nginx配置location
```
location /next/ {
    proxy_pass http://127.0.0.1:8890;
}
```
- 5、完成，可以访问了。

## 版本
- 0.0.1 feat: 新建项目
- 0.0.2 fix: 修复bug，优化项目
- 0.0.3 fix: 更新文档