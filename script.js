function showConfetti() {
    try {
        confetti({
            particleCount: 500,
            spread: 200,
        });
    } catch (error) {
        console.error('Confetti library failed:', error);
        alert('Oops! Something went wrong with the confetti.');
    }
}