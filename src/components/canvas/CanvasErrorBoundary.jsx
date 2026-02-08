import React from "react";

class CanvasErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Canvas Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex justify-center items-center w-full h-full min-h-[200px] text-secondary'>
                    <p>3D Content unavailable</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default CanvasErrorBoundary;
