import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="kabum"
        options={{ title: 'Kabum' }}
      />
      <Tabs.Screen
        name="mercado-livre"
        options={{ title: 'Mercado Livre' }}
      />
    </Tabs>
  );
}
