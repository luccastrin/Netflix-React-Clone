import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import './style.scss';

function Profile() {

    useEffect(() => {
        fetch('http://localhost:3333/users')
            .then(res => res.json())
            .then(data => setProfiles(data))
    }, []);

    const [profiles, setProfiles] = useState([]);

    return (
        <>
            <Header />

            <section id="choose-profile">
                <div className="container">
                    <div className="flex-position">
                        <h2>Quem está assistindo?</h2>
                        <ul>
                            {profiles.map(profile => (
                                <li>
                                    <a className="link-movies" href="/movies">
                                        <div className="avatar">
                                            <img src={profile.avatar} alt="Avatar1" />
                                        </div>
                                        <p>{profile.name}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a className="manage-profile" href="/gerenciar">Gerenciar perfis</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;