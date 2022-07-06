import { ColorTheme, DefaultTheme } from "@config/defaultTheme"
import { collection, doc, Firestore, getDoc, setDoc } from "firebase/firestore"
import { UserData } from "tucmc-auth"

type PreferencesType = {
  theme: string
  background: string
}

export const checkUserInDB = async (
  db: Firestore,
  userData: { sessionId: string; uuid: string },
  preference: PreferencesType,
  customThemes: Record<string, ColorTheme>
): Promise<{
  theme: string
  background: string
  customThemes: Record<string, ColorTheme>
}> => {
  const userRef = doc(db, "users", userData.uuid.replaceAll("/", "-"))
  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists()) {
    const data = { ...preference, customThemes: customThemes }
    await setDoc(userRef, data, { merge: true })

    return data
  } else {
    return userSnapshot.data() as {
      theme: string
      background: string
      customThemes: Record<string, ColorTheme>
    }
  }
}
