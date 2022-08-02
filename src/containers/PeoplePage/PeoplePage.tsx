import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PeopleList } from '@components';
import { PeopleNavigation } from '@components';
import { withErrorApi } from '@hoc-helpers'
import { getApiResource, changeHTTP } from '@utils';
import { API_PEOPLE } from '@constants';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services';
import { useQueryParams } from '@hooks'

import styles from './PeoplePage.module.scss';

interface BaseProps {
    
}

interface InjectedProps {
    setErrorApi: (arr0:boolean) => void
}

const PeoplePage:React.FC<InjectedProps> = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);


    const query = useQueryParams();
    const queryPage = query.get('page')

    const getResource = async (url: string) => {
        const res = await getApiResource(url)

        if (res) {
            // const peopleList = res.results.map(({ name, url }) => {

            //     const id = getPeopleId(url)
            //     const img = getPeopleImage(id)
    
            //     return {
            //         id,
            //         name,
            //         img
            //     }
            // })
    
            // setPeople(peopleList);
            // setPrevPage(changeHTTP(res.previous));
            // setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false);
        }
        else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, [])

    return (
        <>  
            {/* <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            /> */}
            
            {people && <PeopleList people={people} />}
        </>
    )
}

export default withErrorApi<InjectedProps>(PeoplePage);
// export default PeoplePage;