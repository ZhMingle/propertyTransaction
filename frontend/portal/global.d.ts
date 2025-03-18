declare global {
  interface Window {
    google: any; // 或者更精确的类型，比如 google.maps
    ethereum?: any;
  }
}

export {}; // 使文件成为模块
