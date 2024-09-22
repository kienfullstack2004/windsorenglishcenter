import { ColorRing } from "react-loader-spinner"

function Loading() {
    return (<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#ccc', '#ccc', '#cccc', '#ccc', '#ccc']}
    />);
}

export default Loading;