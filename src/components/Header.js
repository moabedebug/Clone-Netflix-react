import React from 'react'
import './Header.css'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/600px-Netflix-new-icon.png" alt="Netflix"/>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7th08ZadbJeY7J3X_2edDTdDpbzbilGuBgzJkKG9yBfpF7OW4zs9hqV9b0rvRK9EeHkk&usqp=CAU" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}