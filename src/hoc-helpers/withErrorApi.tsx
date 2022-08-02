import React, { useState } from 'react';

import { ErrorMessage } from '@components';


export const withErrorApi =<T,> (View: React.ComponentType<T>) => {
    return (props: T) => {
        const [errorApi, setErrorApi] = useState(false);

        return (
            <>  
                {errorApi 
                    ? <ErrorMessage /> 
                    : (
                        <View setErrorApi={setErrorApi} {...props} />
                    )
                }
            </>
        )
    }
}