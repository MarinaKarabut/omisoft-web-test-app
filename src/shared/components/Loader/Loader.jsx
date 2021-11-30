import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import s from './Loader.module.scss'


function LoaderComponent({ onLoad }) {
  return (
    <div className={s.wrapper}>
      <Loader
        type="ThreeDots"
        color='#9921e8'
        height={100}
        width={100}
        timeout={3000}
        loading={onLoad}
      />
    </div>
  );
}

export default LoaderComponent

LoaderComponent.defaultProps = {
    onLoad: () => { }
}


LoaderComponent.propTypes = {
    onLoad: PropTypes.func,
}
