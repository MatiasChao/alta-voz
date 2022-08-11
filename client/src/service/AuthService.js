import "firebase/auth";
import firebase from '../firebase/firebase';

export const AuthService = {
    logInWithEmail: async (email, password) => {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            return {
                user: user
            }
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
}