import { ColorTheme } from "@config/defaultTheme"
import { removeKey } from "@utils/object"
import { doc, Firestore, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { UserData } from "tucmc-auth"

export const updateCustomThemes = async (
  db: Firestore,
  userData: UserData,
  customThemes: Record<string, ColorTheme>,
  theme: string
) => {
  if (!userData) return false

  const userRef = doc(db, "users", userData.studentID)
  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists) {
    return false
  } else {
    try {
      await updateDoc(userRef, { customThemes: customThemes, theme: theme })
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
