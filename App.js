import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootNavigation from "./src/navigator/Root";

export default function App() {
	return (
		<>
			<RootNavigation />
			<StatusBar style="auto" />
		</>
	);

}
