import React, { useState } from 'react';

import { ErrorMessage } from 'components/ErrorMessage';


export const withErrorApi =<T,> (View: React.ComponentType<T>) => {
    return (props: T) => {
        const [errorApi, setErrorApi] = useState(false);

        return (
            <>  
                {errorApi 
                    ? <ErrorMessage /> 
                    : (
                        <View {...props} setErrorApi={setErrorApi} />
                    )
                }
            </>
        )
    }
}