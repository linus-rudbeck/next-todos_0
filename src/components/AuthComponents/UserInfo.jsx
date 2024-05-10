"use client";

import { getUserInfo } from "@/utils/api";
import { checkIfLoggedIn } from "@/utils/auth";
import { useEffect, useState } from "react";


export default function UserInfo() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    const fetchUserInfo = async () => {
        const userInfo = await getUserInfo();
        setUserEmail(userInfo.email);
    };

    useEffect(() => {
        const isLoggedIn = checkIfLoggedIn();
        setIsLoggedIn(isLoggedIn);

        if (isLoggedIn) {
            fetchUserInfo();
        }
    }, []);

    return (<>
        {isLoggedIn ? 
            <p>You are logged in as <b>{userEmail}</b></p> : 
            <p><b>You are not logged in</b></p>}
    </>);
}