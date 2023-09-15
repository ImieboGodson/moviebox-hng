
export default function formatPlaytime (num: number) {
    const hour = Math.floor(num / 60);
    const minutes = num % 60;

    return `${hour}h ${minutes}m`;
}