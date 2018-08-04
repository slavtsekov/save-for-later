const initializeApp = () => {};
const database = () => ({
    ref: (path) => ({
        push: (data) => {},
        update: (edited) => {},
        remove: () => {},
        once: (val) => {}
    })
});

const authResult = {
    stateChangedCallback: undefined,
    onAuthStateChanged(callback) {
        this.stateChangedCallback = callback;
    },
    changeState(user) {
        this.stateChangedCallback(user);
    },
    fetchSignInMethodsForEmail: () => {
        return new Promise((resolve) => {
            const methods = ['google.com'];
            resolve(methods);
        });
    }
};
const auth = () => (authResult);

auth.GoogleAuthProvider = () => ({
    providerId: 'google.com'
});

export { initializeApp, database, auth };
