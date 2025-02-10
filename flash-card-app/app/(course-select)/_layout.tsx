import { Stack } from 'expo-router';

export default function CourseSelectLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
        </Stack>
    );
}