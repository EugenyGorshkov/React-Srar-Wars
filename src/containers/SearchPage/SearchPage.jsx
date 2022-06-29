import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash'

import UiInput from '@ui/UiInput';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

import styles from './SearchPage.module.scss'

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponce = async (params) => {
        const res = await getApiResource(API_SEARCH + params);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            })

            setPeople(peopleList);
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
    
    const handleInputChange = (value) => {
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
            />
            <SearchPageInfo people={people}/>
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);