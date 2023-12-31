export default function Infobox({ title, text, type = "info" }) {
    let bgColor = "bg-blue-300";
    let borderColor = "border-blue-500";
    let textColor = "text-blue-900";

    if (type === "warning") {
        bgColor = "bg-orange-300";
        borderColor = "border-orange-500";
        textColor = "text-orange-900";
    } else if (type === "error") {
        bgColor = "bg-red-300";
        borderColor = "border-red-500";
        textColor = "text-red-900";
    } else if (type === "success") {
        bgColor = "bg-green-300";
        borderColor = "border-green-500";
        textColor = "text-green-900";
    }

    return (
        <div className={`${bgColor} ${borderColor} border rounded-md p-4`}>
            <h3 className={`font-bold text-xl ${textColor}`}>{title}</h3>
            <p className={`font-semibold text-lg ${textColor}`}>{text}</p>
        </div>
    );
}
