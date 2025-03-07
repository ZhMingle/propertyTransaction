import { message } from "antd";

const useMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const Success = (content: string) => {
    messageApi.success(content);
  };

  const Error = (content: string) => {
    messageApi.error(content);
  };

  const Info = (content: string) => {
    messageApi.info(content);
  };

  const Warning = (content: string) => {
    messageApi.warning(content);
  };

  return { Success, Error, Info, Warning, contextHolder };
};

export default useMessage;
