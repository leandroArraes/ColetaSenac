import { View } from 'react-native';

import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/LoginView">login</Link>

      <Link href="/">View user</Link>
    </View>
  );
}
