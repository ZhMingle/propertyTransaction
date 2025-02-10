"use client";
import { Button, Modal, Input } from "antd";
import { useState, useImperativeHandle, forwardRef } from "react";

interface ChildComponentRef {
  closeDialog: () => void;
  openDialog: () => void;
}

const LoginDia = forwardRef<ChildComponentRef, {}>((_, ref) => {
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
  return (
    <Modal open={isModalOpen} onCancel={closeDialog} footer={null}>
      <div className="text-font text-center text-1xl sm:text-3xl">
        Welcome to OneRoof
      </div>
      <div className="mt-8 sm:mt-14 text-font text-center text-lg sm:text-xl whitespace-pre-wrap">
        Sign in
      </div>
      <div className="flex flex-col gap-16">
        <div>
          <span>Email</span>
          <Input />
        </div>
        <div>
          <span>Password</span>
          <Input />
        </div>
        <div className="flex">
          <Button type="primary" className="flex-1">
            {" "}
            Sign in
          </Button>
        </div>
        <div className="text-center"> or </div>
        <div className="text-center"> Don't have an account? </div>
        <div className="flex">
          <Button className="flex-1">Sign up</Button>
        </div>
      </div>
    </Modal>
  );
});

export default LoginDia;
