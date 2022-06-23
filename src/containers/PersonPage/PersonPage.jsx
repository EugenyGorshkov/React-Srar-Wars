import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import styles from './PersonPage.module.scss'

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        (async () => {

            const res = await getApiResource(`${API_PERSON}/${id}/`);
            console.log(res)
            if (res) {
                setPersonInfo([
                    { title: 'Birth year', data: res.birth_year },
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Gender', data: res.gender },
                    { title: 'Skin color', data: res.skin_color },
                    { title: 'Hair color', data: res.hair_color },
                    { title: 'Eye color', data: res.eye_color },
                    
                ]);
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, [])

    return (
        <>
            <PersonLinkBack />
            
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto 
                        personPhoto={personPhoto} 
                        personName={personName}
                    />

                    {personInfo && (
                        <PersonInfo personInfo={personInfo}/>
                    )}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);