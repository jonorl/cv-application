export default function Input(props) {
    const InputStyle = {
        type: "text",
        value: "",
    };

    return (
        <input style={InputStyle}>{props.text}</input>
    );
}