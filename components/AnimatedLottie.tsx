import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

interface AnimatedLottieProps {
    animationName: string;
    width: number;
    height: number;
}

const AnimatedLottie: React.FC<AnimatedLottieProps> = ({ animationName, width, height }) => {
    const [jsonData, setJsonData] = useState<any | null>(null);

    useEffect(() => {
        const fetchJson = async () => {
            try {
                const response = await fetch(`https://servertry-2or3.onrender.com/get-animation/${animationName}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                const jsonData = await response.json();
                setJsonData(jsonData);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        };

        fetchJson();
    }, [animationName]);

    if (!jsonData) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <LottieView
                    source={jsonData}
                    autoPlay
                    loop
                    style={{ width: width, height: height }}
                />
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                {/* Additional content can be added here */}
            </View>
        </SafeAreaView>
    );
};

export default AnimatedLottie;
