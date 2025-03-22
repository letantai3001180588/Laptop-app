import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Href, Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

type Props = {
    emailHref: string
}

function SocialLoginButton(props: Props) {
    const { emailHref } = props

    return (
        <>
            <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                    <Link href={"/signin"} asChild>
                        <TouchableOpacity style={styles.button}>
                            <Ionicons name="mail-outline" size={20} color={Colors.black} />
                            <Text style={styles.btnTxt}>Tiếp tục với Email</Text>
                        </TouchableOpacity>
                    </Link>
                </Animated.View>
            </View>

            <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(700).duration(500)}>
                    <Link href={"/signin"} asChild>
                        <TouchableOpacity style={styles.button}>
                            <Ionicons name="logo-google" size={20} color={Colors.black} />
                            <Text style={styles.btnTxt}>Tiếp tục với Google</Text>
                        </TouchableOpacity>
                    </Link>
                </Animated.View>
            </View>

            <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
                    <Link href={"/signin"} asChild>
                        <TouchableOpacity style={styles.button}>
                            <Ionicons name="logo-facebook" size={20} color={Colors.black} />
                            <Text style={styles.btnTxt}>Tiếp tục với Facebook</Text>
                        </TouchableOpacity>
                    </Link>
                </Animated.View>
            </View>
        </>
    )
}

export default SocialLoginButton

const styles = StyleSheet.create({
    socialLoginWrapper: {
        alignSelf: "stretch",
    },
    button: {
        flexDirection: "row",
        padding: 10,
        borderColor: Colors.gray,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        borderRadius: 25,
        marginBottom: 15
    },
    btnTxt: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
    },
})
