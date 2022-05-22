import { ColorTheme, DefaultTheme } from "@config/defaultTheme"
import { collection, doc, Firestore, getDoc, setDoc } from "firebase/firestore"
import { UserData } from "tucmc-auth"

type PreferencesType = {
  theme: ColorTheme
  background: string
}

export const checkUserInDB = async (
  db: Firestore,
  userData: UserData,
  preference: PreferencesType,
  customThemes: Record<string, ColorTheme>
): Promise<{
  theme: ColorTheme
  background: string
  customThemes: Record<string, ColorTheme>
}> => {
  const userRef = doc(db, "users", userData.studentID)
  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists) {
    const data = { ...preference, customThemes: customThemes }
    await setDoc(userRef, data, { merge: true })

    return data
  } else {
    return userSnapshot.data() as {
      theme: ColorTheme
      background: string
      customThemes: Record<string, ColorTheme>
    }
  }
}
