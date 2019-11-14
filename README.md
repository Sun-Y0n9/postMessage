# postMessage
###### 启动iframe项目

- cd vue-iframe
- npm i 
- npm run serve

###### 启动父级项目

- cd vue-parent

- npm i
- npm run serve

- 记得修改iframes.vue中, iframe标签的src地址

```html
<iframe src="http://localhost:8080/" ref='xmIframe' frameborder="0"></iframe>
```

