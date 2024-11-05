import { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

import { CiMail, CiLock } from "react-icons/ci";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { IoLogInOutline } from "react-icons/io5";


export default function Login({ activeLogin, setActiveLogin }) {

    const { onOpenChange, isOpen, onOpen } = useDisclosure();
    const variants = ["underlined"];

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleComfirm, setIsVisibleComfirm] = useState(false);
    const [activeForm, setActiveForm] = useState('login');

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibilityConfirm = () => setIsVisibleComfirm(!isVisibleComfirm);



    return (
        <div >
            <Button onPress={onOpen} onClick={() => setActiveLogin(isOpen)} className="bg-transparent text-white"> <IoLogInOutline className="text-[19px] md:text-[24px]" /></Button>
            {activeForm == 'login' && <Modal
                backdrop="opaque"
                isOpen={activeLogin}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-30",
                    closeButton: "hidden",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 ">Log in</ModalHeader>
                            <ModalBody className="">

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input type="email" variant={"underlined"} label="Email" />
                                </div>

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input
                                        label="Password"
                                        variant="underlined"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                                {isVisible ? (
                                                    <LuEye className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="w-full"
                                    />
                                </div>

                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>

                                <div
                                    onClick={() => { setActiveForm('signup') }}
                                    className="flex py-2 px-1 justify-between text-dark-grey cursor-pointer transition-all duration-300 hover:text-dark-grey/55">
                                    Create new account
                                </div>
                            </ModalBody>
                            <ModalFooter className="">
                                <Button color="danger" variant="flat" onClick={() => { setActiveLogin(!activeLogin) }} onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={() => { setActiveLogin(!activeLogin) }} onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>}

            {activeForm == 'signup' && <Modal
                backdrop="opaque"
                isOpen={activeLogin}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-30",
                    closeButton: "hidden",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 ">SignUp</ModalHeader>
                            <ModalBody className="">

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input type="email" variant={"underlined"} label="Email" />
                                </div>

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input
                                        label="Password"
                                        variant="underlined"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibilityConfirm} aria-label="toggle password visibility">
                                                {isVisibleComfirm ? (
                                                    <LuEye className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisibleComfirm ? "text" : "password"}
                                        className="w-full"
                                    />
                                </div>

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input
                                        label="Confirm Password"
                                        variant="underlined"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                                {isVisible ? (
                                                    <LuEye className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="w-full"
                                    />
                                </div>



                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                </div>

                                <div
                                    onClick={() => { setActiveForm('login') }}
                                    className="flex py-2 px-1 justify-between text-dark-grey cursor-pointer transition-all duration-300 hover:text-dark-grey/55">
                                    already have account?
                                </div>
                            </ModalBody>
                            <ModalFooter className="">
                                <Button color="danger" variant="flat" onClick={() => { setActiveLogin(!activeLogin) }} onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={() => { setActiveLogin(!activeLogin) }} onPress={onClose}>
                                    Sign Up
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>}
        </div>
    );
}