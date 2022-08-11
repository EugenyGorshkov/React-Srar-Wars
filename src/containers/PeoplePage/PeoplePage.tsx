import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PeopleList } from 'components/PeoplePage';
import { PeopleNavigation } from 'components/PeoplePage';
import { withErrorApi } from 'hoc-helpers'
import { getApiResource, changeHTTP } from 'utils';
import { API_PEOPLE } from 'constants/index';
import { getPeopleId, getPeopleImage, getPeoplePageId } from 'services';
import { useQueryParams } from 'hooks'

import styles from './PeoplePage.module.scss';

interface InjectedProps {
    setErrorApi?: (arr0:boolean) => void
}

interface IResult {
    name: string;
    url: string;
}


const PeoplePage:React.FC<InjectedProps> = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState<string | null>(null);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [counterPage, setCounterPage] = useState(1);


    const query = useQueryParams();
    const queryPage = query.get('page')

    const getResource = async (url: string) => {
        const res = await getApiResource(url)
        console.log(res);
        

        if (res) {
            const peopleList = res.results.map(({ name, url }:IResult) => {

                const id = getPeopleId(url)
                const img = getPeopleImage(id)
    
                return {
                    id,
                    name,
                    img
                }
            })
    
            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url))
            if (setErrorApi !== undefined) {
                setErrorApi(false);
            }   
        }
        else {
            if(setErrorApi !== undefined) {
                setErrorApi(true);
            }    
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, [])

    return (
        <>  
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            
            {people && <PeopleList people={people} />}
        </>
    )
}

export default withErrorApi<InjectedProps>(PeoplePage);