import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const Loading = () => {
    return (
        <span className="flex justify-center block w-full mx-auto my-0 text-red-500 opacity-75">
            <CgSpinner className="text-7xl animate-spin" />
        </span>
    )
}

export default Loading
