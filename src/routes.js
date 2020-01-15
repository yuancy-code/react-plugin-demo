/*
 * @Author: yuanchengyong
 * @Date: 2020-01-13 14:09:45
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-13 17:41:29
 */
import routesFreely from "./pages-freely/index";
let pages = require.context("./pages", true, /\/.*router\.js$/);
let routes = [];
let pathKeys = [];
pages.keys().map(key => {
  let route = pages(key).default;
  route.map(item => {
    let path = item.path;
    if (pathKeys.includes(path)) {
      console.warn(`Route "${path}" already exists, please modify!`);
    }
    pathKeys.push(path);
    return item;
  });
  routes = [...routes, ...route];
  return routes;
});

export default [
  ...routes, // 自动加载route.js文件
  ...routesFreely // 自由定义路由
];
