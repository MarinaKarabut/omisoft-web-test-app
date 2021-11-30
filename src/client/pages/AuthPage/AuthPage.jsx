import AuthForm from '../../AuthForm'
import foto from '../../../images/foto.jpg'

import styles from './AuthPage.module.scss'

const AuthPage = () => {
    return (
        <section className={styles.authPage}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <img className={styles.img} src={foto} alt="" />
                    </div>
                    <AuthForm />
                </div>
            </div>
        </section>
        )
};

export default AuthPage;
