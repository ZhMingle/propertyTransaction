"use client";
import { Button, Modal, Input } from "antd";
import { useState, useImperativeHandle, forwardRef } from "react";
import { DialogActions } from "@/types/dialog";
import { ethers } from "ethers";
import axios from "axios";

const LoginDia = forwardRef<DialogActions, {}>((_, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // 1. 连接 MetaMask
  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);

    // 2. 请求服务器获取 nonce
    const { data } = await axios.get(`/api/auth/nonce?address=${address}`);
    const nonce = data.nonce;
    setMessage(nonce);

    // 3. 使用钱包签名
    const signature = await signer.signMessage(nonce);

    // 4. 将签名发给后端验证
    const response = await axios.post("/api/auth/verify", {
      address,
      signature,
    });

    setJwt(response.data.token);
    alert("Login successful! JWT saved.");
  }
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
        <div className="mt-4">
          <h3 className="font-bold">JWT Token:</h3>
          <textarea className="w-full h-24 p-2 border" readOnly value={jwt} />
        </div>
      )}
    </Modal>
  );
});

export default LoginDia;
