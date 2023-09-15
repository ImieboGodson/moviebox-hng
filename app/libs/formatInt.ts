

export default function formatInt (num: number) {
    if(num < 1e3) return num;
    if (num >= 1e3 && num < 1e6)
        return +(num / 1e3).toFixed(1) + "K";
    if (num >= 1e6 && num < 1e9)
        return +(num / 1e6).toFixed(1) + "M";
    if (num >= 1e9 && num < 1e12)
        return +(num / 1e9).toFixed(1) + "B";
}