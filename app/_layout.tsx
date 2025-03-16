import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { LogtoProvider, LogtoConfig } from "@logto/rn";

export default function RootLayout() {
  const config: LogtoConfig = {
    endpoint: "https://jps5vg.logto.app/",
    appId: "wswyu8i1fdwr6037dcxiu",
  };

  const [loaded, error] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    outfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <LogtoProvider config={config}>
      <Stack>
        <Stack.Screen
          name="Landing"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </LogtoProvider>
  );
}
