import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, updatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set, get} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { v4 as uuidv4 } from "https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js";
import { firebaseConfig } from "./config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, updatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set, get, uuidv4 };

export async function getUserInfo(uid) {
    try {
        const userRef = ref(db, `users/${uid}`);
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
}
