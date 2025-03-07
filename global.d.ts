declare global {
  interface Window {
    google: any; // 或者更精确的类型，比如 google.maps
  }
}

export {}; // 使文件成为模块
