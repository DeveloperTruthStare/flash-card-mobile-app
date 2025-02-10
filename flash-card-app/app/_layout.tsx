import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(course-select)" options={{title: 'Select a Course'}} />
    </Stack>
  );
}
