/**
 * 物藏录 - uTools 预加载脚本
 * 该脚本在窗口加载前执行，运行在独立的预加载环境
 */

// 当插件装载成功，uTools将会主动调用这个方法
window.exports = {
  "wucanglu_main": {
    mode: "none",
    args: {
      // 进入插件应用时调用
      enter: (action) => {
        console.log('物藏录插件启动');
        // 可以在这里处理进入插件的逻辑
      },
      // 退出插件应用时调用  
      leave: () => {
        console.log('物藏录插件退出');
        // 可以在这里处理退出插件的逻辑
      }
    }
  }
};

// 监听uTools主输入框输入事件（可选）
// utools.onPluginEnter(({ code, type, payload }) => {
//   console.log('插件进入:', code, type, payload);
// });
