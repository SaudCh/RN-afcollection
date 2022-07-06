import 'react-native-gesture-handler';
import StackNavigation from './assets/Navigator/StackNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, Text, LogBox } from 'react-native'
import envs from './Config/env'
import { AppProvider } from './assets/Components/Context/cartContext';

export default function App() {

  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(["Animated.event now requires a second argument for op"])
  return (
    <AppProvider>
      <PaperProvider>
        <StackNavigation />
      </PaperProvider>
    </AppProvider>
  );
}

