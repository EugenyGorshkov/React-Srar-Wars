import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import {PersonInfo} from '@components';
import {PersonPhoto} from '@components';
import {PersonLinkBack} from '@components';
import {UiLoading} from '@UI';

import { getApiResource } from '@utils';
import { getPeopleImage } from '@services';
import { API_PERSON } from '@constants';
import { withErrorApi } from '@hoc-helpers';

import styles from './PersonPage.module.scss';

// const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

interface BaseProps {
    
}

interface InjectedProps {
    setErrorApi: (arr0:boolean) => void
}


const PersonPage: React.FC<InjectedProps> = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    // const storeData = useSelector(state => state.favoriteReducer);

    const { id } = useParams(); 

    useEffect(() => {
        (async () => { 
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            // storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
            // setPersonId(id)

            if (res) {
                // setPersonInfo([
                //     { title: 'Birth year', data: res.birth_year },
                //     { title: 'Height', data: res.height },
                //     { title: 'Mass', data: res.mass },
                //     { title: 'Gender', data: res.gender },
                //     { title: 'Skin color', data: res.skin_color },
                //     { title: 'Hair color', data: res.hair_color },
                //     { title: 'Eye color', data: res.eye_color },
                    
                // ]);
                setPersonName(res.name);
                // setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

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
                    {/* <PersonPhoto 
                        // personPhoto={personPhoto} 
                        // personName={personName}
                        // personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    /> */}

                    {personInfo && (
                        <PersonInfo personInfo={personInfo}/>
                    )}

                    {personFilms && (
                        <Suspense fallback={<UiLoading theme={'white'} isShadow={false}/>}>
                            {/* <PersonFilms personFilms={personFilms}/> */}
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

// PersonPage.propTypes = {
//     setErrorApi: PropTypes.func
// }

// export default withErrorApi(PersonPage);
export default PersonPage;