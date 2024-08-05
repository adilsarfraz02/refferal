"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button as NextUIButton } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';

export default function LoginModal({ isOpen, onOpenChange, Button }) {
  return (
    <>
      {Button}
      <Modal placement="center" backdrop="opaque"
        isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-center py-10 flex-col gap-2">
                <h2 className="text-2xl font-bold">Welcome to Our Referral Program</h2>
                <p className="text-sm text-gray-500">Create an account or log in to start earning rewards by referring your friends.</p>
              </ModalHeader>
              <ModalBody>
                <NextUIButton 
                  onClick={() => signIn('google')} 
                  className="w-full py-3 border rounded-lg flex items-center justify-center gap-3 text-base font-semibold bg-white shadow-md hover:bg-gray-100"
                >
                  <FcGoogle size={22} />
                  Continue with Google
                </NextUIButton>
                <div className="mt-10 text-center text-sm text-gray-500">
                  By continuing, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
                </div>
                <NextUIButton 
                  variant=""
                  className="underline hover:text-black w-fit mx-auto underline-offset-2 text-gray-500" 
                  onClick={onClose}
                >
                  Go Back
                </NextUIButton>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
