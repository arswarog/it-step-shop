import * as React from 'react';

export interface IHeaderState {
}

export interface IHeaderProps {
}

export class HeaderComponent extends React.Component<IHeaderProps, IHeaderState> {
    render() {
        return (
            <div className="header container-fluid">
                <div className="header__logo "></div>
                <form action="" className="form-inline">
                    <div className="header__search input-group">
                        <input type="text" className="form-control" placeholder="Поиск по каталогу" aria-label="Поиск по каталогу" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">?</button>
                        </div>
                    </div>
                </form>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Каталог</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Новости</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">промо</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Гарантии</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Контакты</a>
                    </li>
                </ul>
                <div className="header__right-box">
                    <div className="header__logIn">Вход | Регистрация</div>
                    <div className="header__contact">+7(999)999-99-99</div>
                    <div></div>
                </div>
            </div>
        );
    }
}