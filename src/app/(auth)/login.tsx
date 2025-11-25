import ShareButton from "@/components/button/share.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { LoginSchema } from "@/utils/validate.schema";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Formik } from "formik";
import { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: APP_COLOR.WHITE,
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: APP_COLOR.BLUE,
    },
    logoContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 150,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 24,
        paddingVertical: 32,
        justifyContent: 'space-between',
    },
    form: {
        width: '100%',
        marginTop: 10,
    },
    forgotPassword: {
        textAlign: 'center',
        color: APP_COLOR.BLACK,
        fontWeight: 'bold',
        marginTop: 24,
        fontSize: 15,
    },
    bottomSection: {
        width: '100%',
        paddingTop: 20,
    },
    createAccountButton: {
        borderWidth: 1.5,
        borderColor: APP_COLOR.BLUE_LIGHT,
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: 'center',
    },
    createAccountText: {
        color: APP_COLOR.BLUE_LIGHT,
        fontWeight: 'bold',
        fontSize: 16,
    },
    metaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
    },
});

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    // Hàm xử lý đăng nhập tạm thời, bạn có thể thêm logic gọi API ở đây
    const handleLogin = (values: { email: string, password: string }) => {
        console.log("Login submitted with values:", values);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // Sau khi có API, điều hướng người dùng tại đây
            // router.replace("/(tabs)");
            alert("Chức năng đăng nhập đang được phát triển!");
        }, 1500);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoiding}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <MaterialCommunityIcons name="facebook-messenger" size={70} color="white" />
                            </View>

                            <Formik
                                validationSchema={LoginSchema}
                                initialValues={{ email: '', password: '' }}
                                onSubmit={handleLogin}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                    <View style={styles.contentContainer}>
                                        <View style={styles.form}>
                                            <ShareInput
                                                placeholder="Số điện thoại hoặc email"
                                                keyboardType="email-address"
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                error={errors.email}
                                                touched={touched.email}
                                            />

                                            <ShareInput
                                                placeholder="Mật khẩu"
                                                secureTextEntry={true}
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                                error={errors.password}
                                                touched={touched.password}
                                            />

                                            <ShareButton
                                                loading={loading}
                                                tittle="Đăng nhập"
                                                onPress={handleSubmit as any}
                                                textStyle={{
                                                    color: APP_COLOR.WHITE,
                                                    fontSize: 16,
                                                    fontWeight: 'bold',
                                                }}
                                                btnStyle={{
                                                    backgroundColor: APP_COLOR.BLUE_LIGHT,
                                                    borderRadius: 25,
                                                    paddingVertical: 12,
                                                    marginTop: 8
                                                }}
                                            />
                                            <Text style={styles.forgotPassword} onPress={() => alert("Chức năng quên mật khẩu đang được phát triển!")}>
                                                Quên mật khẩu?
                                            </Text>
                                        </View>

                                        <View style={styles.bottomSection}>
                                            <Pressable style={styles.createAccountButton} onPress={() => alert("Chức năng tạo tài khoản đang được phát triển!")}>
                                                <Text style={styles.createAccountText}>Create new account</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginPage;