import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
// import { setPersonToFavorite, removePersonFromFavorive } from '@store';

import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import styles from './PersonPhoto.module.scss';

interface PersonPhotoProps {
    personPhoto: string,
    personName: string,
    personId: string,
    personFavorite: boolean,
    setPersonFavorite: Function,
}

const PersonPhoto:React.FC<PersonPhotoProps> = ({
    personPhoto,
    personName,
    personId,
    personFavorite,
    setPersonFavorite,
}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            // dispatch(removePersonFromFavorive(personId));
            setPersonFavorite(false);
        } else {
            // dispatch(setPersonToFavorite({
            //     [personId]: {
            //         name: personName,
            //         img: personPhoto
            //     }
            // }));
            setPersonFavorite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img
                    className={styles.favorite}
                    src={personFavorite ? iconFavoriteFill : iconFavorite}
                    alt="Add to favorite"
                    onClick={dispatchFavoritePeople}
                />
            </div>


        </>
    )
}

export default PersonPhoto;