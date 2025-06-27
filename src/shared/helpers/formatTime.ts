export function formatTime(seconds: number): string {
    if (isNaN(seconds) || seconds < 0) {
        return '00:00';
    }

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    // const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');

    return `${minutes}:${formattedSeconds}`;
}