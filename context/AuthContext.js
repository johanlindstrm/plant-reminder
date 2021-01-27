import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase.js";
export const AuthContext = createContext()
// const plantImg = require('../assets/potted-plant.png')

// let plantArray = [
//     {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'}
// ]

export default function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true)
    // const [plantList, setPlantList] = useState(plantArray)



    // const addPlant = (title, reminderTime, timeLeft) => {
    //     var newArray = [];
    //     plantArray.push(...newArray, {id:4, img:plantImg, title: 'title', reminderTime:'reminderTime', timeLeft:'timeLeft'} )
    //     // plantArray.map((newArray) => { 
    //     //     return (
    //     //         {id:4, img:plantImg, title: 'title', reminderTime:'reminderTime', timeLeft:'timeLeft'}

    //     //     )
    //     // })
    //     setPlantList(newArray)
    //     console.log('add plant pressed',plantArray)
    // }

    useEffect(()=> {
            const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log('user: ', user);
            setUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    });

    const logIn = async (email, password) => {
        console.log('calling log in')
        try {
            await auth.signInWithEmailAndPassword(email, password)
            console.log('* Firebase Log In *')
            setIsLoggedIn(true)
        } catch (error) {
            console.log('error: ', error)
            let errorCode = error.code;
            let errorMessage = error.message
            if (errorCode === 'auth/wrong-password') {
                alert('wrong password.');
            } else {
                alert(errorMessage);
            }
        }
    }

    const signOut = () => {
        try {
            auth.signOut();
            setIsLoggedIn(false)
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <AuthContext.Provider value={{ isLoading, user , logIn, signOut}}>
        {children}
        </AuthContext.Provider>
    )
}