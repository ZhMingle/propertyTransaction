import { ethers } from "ethers";
import apiClient from "./api"; // Assuming axios instance is defined in apiClient.ts

/** 获取 nonce */
export async function getNonce(walletAddress: string): Promise<string> {
  try {
    const { data } = await apiClient.post(`/auth/nonce`, {
      walletAddress,
    });
    return data.nonce;
  } catch (error) {
    console.error("Failed to fetch nonce:", error);
    throw error;
  }
}

/** 让用户签名 nonce */
export async function signMessage(
  nonce: string,
  signer: ethers.JsonRpcSigner
): Promise<string> {
  try {
    return await signer.signMessage(nonce);
  } catch (error) {
    console.error("Failed to sign message:", error);
    throw error;
  }
}

/** 发送签名到后端验证 */
export async function verifySignature(
  walletAddress: string,
  signature: string
): Promise<string> {
  try {
    const { data } = await apiClient.post("/auth/login", {
      walletAddress,
      signature,
    });
    return data.token; // 返回 JWT Token
  } catch (error) {
    console.error("Failed to authenticate:", error);
    throw error;
  }
}
