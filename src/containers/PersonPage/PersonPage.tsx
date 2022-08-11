import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { PersonInfo } from 'components/PersonPage';
import { PersonPhoto } from 'components/PersonPage';
import { PersonLinkBack } from 'components/PersonPage';
import { UiLoading } from 'components/UI';

import { getApiResource } from 'utils';
import { getPeopleImage } from 'services';
import { API_PERSON } from 'constants/index';
import { withErrorApi } from 'hoc-helpers';

import styles from './PersonPage.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';

const PersonFilms = React.lazy(() => import('components/PersonPage/PersonFilms/PersonFilms'));

interface BaseProps {
    
}

interface InjectedProps {
    setErrorApi?: (arr0:boolean) => void
}

interface IPersonInfo {
    title: string;
    data: string
} 


const PersonPage: React.FC<InjectedProps> = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState<string>('');
    const [personInfo, setPersonInfo] = useState<IPersonInfo[]>([]);
    const [personName, setPersonName] = useState('');
    const [personPhoto, setPersonPhoto] = useState<string>('');
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    // const storeData = useSelector(state => state.favoriteReducer); до TS 
    const storeData = useTypedSelector(state => state.favoriteReducer)

    const { id } = useParams(); 

    useEffect(() => {
        (async () => { 
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            if (id !== undefined) {
                storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
            }
            
            if (id !== undefined) {
                setPersonId(id)
            }
            
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
                setPersonName(res.name);
                if (id !== undefined) {
                    setPersonPhoto(getPeopleImage(id));
                }
                res.films.length && setPersonFilms(res.films);

                if (setErrorApi !== undefined) {
                    setErrorApi(false);
                }
                
            } else {
                if (setErrorApi !== undefined) {
                    setErrorApi(true);
                }
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
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && (
                        <PersonInfo personInfo={personInfo}/>
                    )}

                    {personFilms && (
                        <Suspense fallback={<UiLoading theme={'white'} isShadow={false}/>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

export default withErrorApi<InjectedProps>(PersonPage);
