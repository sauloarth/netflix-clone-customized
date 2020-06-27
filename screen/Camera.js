import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    }
})

export default class Camera extends PureComponent {

    takePicture = async () => {
        if (this.camera) {
            const options = {
                quality: 0.5,
                base64: true,
            }

            const data = await this.camera.takePictureAsync(options);
            this.props.navigation.navigate('More', {
                uri: data.uri,
                name: this.props.route.params.name,
                icon: null
            })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => { this.camera = ref }}
                    captureAudio={false}
                    type={RNCamera.Constants.Type.front}
                    style={styles.preview}
                    androidCameraPermissionOptions={{
                        title: 'Allow access to camera',
                        message: 'This app is requesting use to camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'No'
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> CLICK </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

