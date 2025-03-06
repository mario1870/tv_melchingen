import React, { JSX } from 'react';

interface FormatTextFunction {
    (text: string): JSX.Element[];
}

const useFormatText: FormatTextFunction = (text) => {
        return text.split('\n').map((line, index) => (
                <span key={index}>
                        {line}
                        <br />
                </span>
        ));
};

export default useFormatText;
