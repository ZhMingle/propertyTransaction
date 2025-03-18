"use client";
import { Button, Modal, Input } from "antd";
import { useState, useImperativeHandle, forwardRef } from "react";
import { DialogActions } from "@/types/dialog";
import { ethers } from "ethers";
import { getNonce, signMessage, verifySignature } from "@/fetch/authService";
import useMessage from "@/hooks/MessageHook";

interface LoginDiaProps {
  onWalletChange: (isConnected: boolean) => void;
}

const LoginDia = forwardRef<DialogActions, LoginDiaProps>(
  ({ onWalletChange }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Msg = useMessage();
    function closeDialog() {
      setIsModalOpen(false);
    }
    function openDialog() {
      setIsModalOpen(true);
    }
    useImperativeHandle(ref, () => ({
      closeDialog,
      openDialog,
    }));
    const [walletAddress, setWalletAddress] = useState("");
    const [message, setMessage] = useState("");
    const [jwt, setJwt] = useState("");

    /** 连接钱包并进行身份验证 */
    async function connectWallet() {
      try {
        if (!window.ethereum) {
          alert("Please install MetaMask");
          return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        setWalletAddress(address);

        // 获取 nonce
        const nonce = await getNonce(address);

        // 签名 nonce
        const signature = await signMessage(nonce, signer);

        // 发送签名到后端验证
        const token = await verifySignature(address, signature);

        // 保存 JWT 并通知 UI 变化
        setJwt(token);
        onWalletChange(true);
        Msg.Success("Login successful! JWT saved.");
      } catch (error) {
        Msg.Error("Login failed: " + error.message);
      }
    }

    const logoutWallet = () => {
      setWalletAddress("");
      setMessage("");
      setJwt("");
      onWalletChange(false);
    };
    return (
      <Modal open={isModalOpen} onCancel={closeDialog} footer={null}>
        <div className="text-font mb-20 text-center text-1xl sm:text-3xl">
          Welcome to OneRoof
        </div>

        <div className="flex flex-col gap-16 mb-20">
          <div className="flex">
            {walletAddress ? (
              <p className="text-green-500">Connected: {walletAddress}</p>
            ) : (
              <Button type="primary" className="flex-1" onClick={connectWallet}>
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
        {jwt && (
          <div className="flex">
            <Button type="primary" className="flex-1" onClick={logoutWallet}>
              Logout wallet
            </Button>
          </div>
        )}
      </Modal>
    );
  }
);

export default LoginDia;
