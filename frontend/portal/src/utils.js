export function convertToFormData(
  obj,
  formData = new FormData(),
  parentKey = ""
) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // 如果是对象，递归调用
        convertToFormData(obj[key], formData, newKey);
      } else if (Array.isArray(obj[key])) {
        // 如果是数组，遍历数组
        obj[key].forEach((item, index) => {
          const arrayKey = `${newKey}`;
          formData.append(arrayKey, item);
        });
      } else {
        // 否则直接添加键值对
        formData.append(newKey, obj[key]);
      }
    }
  }
  return formData;
}
