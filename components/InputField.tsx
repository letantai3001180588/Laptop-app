import { Colors } from '@/constants/Colors'
import { StyleSheet, TextInput, View } from 'react-native'

type Props = {}

function InputField(props: any) {
    return (
        <TextInput style={styles.inputField} {...props} />
    )
}

export default InputField

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: Colors.white,
        paddingHorizontal: 18,
        paddingVertical: 12,
        alignSelf: "stretch",
        borderRadius: 5,
        fontSize: 16,
        color: Colors.black,
        marginBottom: 20
    }
})
