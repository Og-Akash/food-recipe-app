import { createNewUser, getUserByEmail } from "@/services/apiService";
import { IdTokenClaims, useLogto } from "@logto/rn";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Index() {
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  const [user, setUser] = useState<IdTokenClaims | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then(async (userData: IdTokenClaims) => {
        if (userData?.email) {
          const result = await getUserByEmail(userData?.email);
          console.log(result.data);
          setUser(userData);
        } else {
          const data = {
            username: userData.name,
            email: userData.email,
            profileImage: userData.picture,
          };
          const res = await createNewUser(data);
          console.log(res.data);
        }
      });
    }
  }, [isAuthenticated]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Redirect href="/Landing" /> */}
    </View>
  );
}
