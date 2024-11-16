
import { useContext, useEffect, useState } from "react";

// icons 
import { LuEye, LuEyeOff } from "react-icons/lu";
import { IoLogInOutline } from "react-icons/io5";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Spinner } from "@nextui-org/react";

import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { storeInSession } from "@/common/SessionFunc";
import { UserContext } from "@/app/layout";




export default function Login({ activeLogin, setActiveLogin }) {

    const { onOpenChange, isOpen, onOpen } = useDisclosure();
    const variants = ["underlined"];

    // password eye
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleComfirm, setIsVisibleComfirm] = useState(false);

    //form 
    const [activeForm, setActiveForm] = useState('login');
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('')

    const [emailValSignup, setEmailValSignup] = useState('');
    const [passwordValSignup, setPasswordValSignup] = useState('')
    const [passwordValSignupConfirm, setPasswordValSignupConfirm] = useState('')

    //for spinner 
    const [loder, setLoder] = useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibilityConfirm = () => setIsVisibleComfirm(!isVisibleComfirm);

    // regex
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


    let { setUserAuth, setActiveUserAuth } = useContext(UserContext)

    const submitLoginForm = async () => {

        setLoder(true)

        // checking conditoins 
        if (emailVal.length <= 0) {
            setLoder(false)
            return toast.error("Email is required");
        }

        if (!emailRegex.test(emailVal)) {
            setLoder(false)
            return toast.error("Email is invalid");
        }

        if (!passwordRegex.test(passwordVal)) {
            setLoder(false)
            return toast.error("Password should be 6 to 20 charaters long with 1 numeric, 1 lowercase and 1 uppercase");
        }

        const formData = {
            email: emailVal,
            password: passwordVal
        }

        await axios.post(process.env.NEXT_PUBLIC_URL + "/api/signin", formData).then(({ data }) => {


            // set crendential confirm 
            setUserAuth(data?.data)
            setActiveUserAuth(true)
            storeInSession("user", JSON.stringify(data?.data))

            // frontend refresh 
            setLoder(false);
            setEmailVal('');
            setPasswordVal('');
            setActiveLogin(!activeLogin);
            toast.success('Successfully Login!');
        }).catch(({ response }) => {
            let resError = response?.data?.data?.error;
            setLoder(false);
            setEmailVal('');
            setPasswordVal('');
            toast.error(resError);
        })


    }

    const submitSignupForm = async () => {

        setLoder(true)

        // checking conditoins 
        if (emailValSignup.length <= 0) {
            setLoder(false)
            return toast.error("Email is required");
        }

        if (!emailRegex.test(emailValSignup)) {
            setLoder(false)
            return toast.error("Email is invalid");
        }

        if (!passwordRegex.test(passwordValSignup)) {
            setLoder(false)
            return toast.error("Password should be 6 to 20 charaters long with 1 numeric, 1 lowercase and 1 uppercase");
        }

        if (passwordValSignup != passwordValSignupConfirm) {
            setLoder(false)
            return toast.error("Password not match");
        }

        const formData = {
            email: emailValSignup,
            password: passwordValSignup
        }

        await axios.post(process.env.NEXT_PUBLIC_URL + "/api/signup", formData).then(({ data }) => {

            // setTimeout(() => {
            //     storeInSession("user", JSON.stringify(data?.data))
            //     setUserAuth(data?.data);
            // }, 1000);

            // set crendential confirm 
            setUserAuth(data?.data)
            setActiveUserAuth(true)
            storeInSession("user", JSON.stringify(data?.data))

            // frontend refresh 
            toast.success('Successfully created!');
            setEmailValSignup('')
            setPasswordValSignup('')
            setPasswordValSignupConfirm('')
            // setActiveLogin(!activeLogin);
        }).catch(({ response }) => {
            let resError = response?.data?.data?.error;
            toast.error(resError);
            setLoder(false);
            setEmailValSignup('')
            setPasswordValSignup('')
            setPasswordValSignupConfirm('')
            console.log(response);

        })


    }

    return (
        <div >
            <Toaster position="top-center" />
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
                            <Toaster position="top-center" />

                            <ModalHeader className="flex flex-col gap-1 ">Log in</ModalHeader>
                            <ModalBody className="">

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input
                                        type="email"
                                        label="Email"
                                        variant={"underlined"}
                                        value={emailVal}
                                        onValueChange={setEmailVal}
                                    />
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
                                        value={passwordVal}
                                        onValueChange={setPasswordVal}
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
                                <Button
                                    color="primary" onClick={submitLoginForm} onPress={onClose}>
                                    {!loder ? "Sign in" : <Spinner size="sm" color="default" />}
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
                                    <Input
                                        type="email"
                                        label="Email"
                                        value={emailValSignup}
                                        variant={"underlined"}
                                        onValueChange={setEmailValSignup}
                                    />
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
                                        value={passwordValSignup}
                                        onValueChange={setPasswordValSignup}
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
                                        value={passwordValSignupConfirm}
                                        onValueChange={setPasswordValSignupConfirm}
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
                                <Button color="primary" onClick={submitSignupForm} onPress={onClose}>
                                    {!loder ? "Sign in" : <Spinner size="sm" color="default" />}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>}
        </div>
    );
}