import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash'

import { UiInput } from 'components/UI';
import { SearchPageInfo } from 'components/SearchPage';
import { withErrorApi } from 'hoc-helpers'
import { getApiResource } from 'utils';
import { API_SEARCH } from 'constants/index';
import { getPeopleId, getPeopleImage } from 'services';

import styles from './SearchPage.module.scss';

interface IResult {
    name: string;
    url: string;
}

interface BaseProps {
    
}

interface InjectedProps {
    setErrorApi: (arr0:boolean) => void
}


const SearchPage: React.FC<InjectedProps> = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponce = async (params: string) => {
        const res = await getApiResource(API_SEARCH + params);

        if (res) {
            const peopleList = res.results.map(({ name, url }:IResult) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            })

            // setPeople(peopleList);
            setErrorApi(false)
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResponce('')
    }, []);

    const debouncedGetResponce = useCallback(
        debounce(value => getResponce(value), 300),
        []
    )
    
    const handleInputChange = (value:string) => {
        setInputSearchValue(value);
        debouncedGetResponce(value);
    }

    return (
        <>
            <h1 className='header__text'>Search</h1>
            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder='Input Character`s name'
                classes={styles.input__search}
                crossDisabled={false}
            />
            <SearchPageInfo people={people}/>
        </>
    )
}


// export default withErrorApi(SearchPage);
export default SearchPage;