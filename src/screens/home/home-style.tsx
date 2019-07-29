import { StyleSheet, Platform } from 'react-native';
import Config from 'react-native-config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBg: {
        backgroundColor: Config.PRIMARY_COLOR,
    },
    menuIcon: {
        paddingLeft: 5,
    },
    refreshIcon: {
        paddingRight: 5,
    },
    resourceListContainer: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
        flexDirection: 'row',
        borderColor: '#c9c9c9',
        borderBottomWidth: 0.33,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    resourceImageConatiner: {
        position: 'relative',
    },
    resourceImage: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
    badge: {
        backgroundColor: Config.PRIMARY_COLOR,
        height: 20,
        borderRadius: 50,
        position: 'absolute',
        top: -10,
        right: -10,
    },
    text: {
        top: -2.5,
        fontSize: 10,
        lineHeight: 20,
    },
    iconColor: {
        color: '#fff',
    },
    headerTitle: {
        color: '#fff',
    },
    searchBarHeader: {
        backgroundColor: '#999',
        ...Platform.select({
            ios: {
                height: 40,
                paddingTop: 0,
            },
        }),
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 75,
    },
    renderSeparator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    containerColor: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    spinnerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});

export default styles;