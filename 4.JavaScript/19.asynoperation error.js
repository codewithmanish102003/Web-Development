function asyncOperation(callback) {
    setTimeout(() => {
        try {
            // Simulating an error
            throw new Error('Async error');
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

asyncOperation((error) => {
    if (error) {
        console.error('Async operation error:', error.message);
    } else {
        console.log('Async operation completed successfully');
    }
});
