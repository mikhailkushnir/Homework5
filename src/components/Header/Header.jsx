import React, { useContext } from 'react'
import './index.css';
import { Search } from '../Search/Search';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as Like } from '../Card/img/like.svg';
import { ReactComponent as Basket } from './img/basket.svg';
import { ReactComponent as Profile } from './img/profile.svg';
import { CardsContext } from '../../context/cardContext';


export const Header = (props) => {

    const setSearchQuery = (path) => {
        props.setSearch(path);
    }

    const location = useLocation();

    const { favorites, setModalActive } = useContext(CardsContext);

    return <div className="header">
        <div className='container'>
            <div className='header__wrapper'>
                <Link to={'/'}>
                    <div className='name'>Dogfood</div>
                </Link>
                {location.pathname === '/' && <Search setSearch={setSearchQuery} />}
                <div className='header__icons'>
                    <Link className='header__fav' to={'/favorites'}>
                        <Like className='header__like' />
                        {!!favorites.length && <span className='header__bubble'>{favorites.length}</span>}
                    </Link>
                    <Basket className='header__icon' />
                    <Link to={'/login'} onClick={()=>setModalActive(true)}>
                    <Profile  className='header__icon' />
                    </Link>
                </div>
            </div>
        </div>
    </div>
}
