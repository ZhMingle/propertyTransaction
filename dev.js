const { exec } = require("child_process");

// 启动 Next.js
const server = exec("next dev --turbopack");

// 监听输出日志，等到 Next.js 完全启动后再打开浏览器
server.stdout.on("data", (data) => {
  console.log(data);
  if (data.includes("Local:")) {
    openBrowser("http://localhost:3000");
  }
});

// 兼容 Windows、macOS 和 Linux
function openBrowser(url) {
  const startCmd =
    process.platform === "darwin"
      ? `open ${url}` // macOS
      : process.platform === "win32"
      ? `start ${url}` // Windows
      : `xdg-open ${url}`; // Linux

  exec(startCmd, (err) => {
    if (err) {
      console.error("Failed to open browser:", err);
    }
  });
}
