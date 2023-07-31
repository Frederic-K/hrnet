import { PropTypes } from 'prop-types'
export default function InfoModal({
  setIsModalOpen,
  title,
  information,
  modalBg,
  alignTitle,
  colourTitle,
  alignInformation,
  colourInformation,
  colourConfirmBtnBg,
  colourConfirmBtn,
  borderConfirmBtn,
}) {
  const stylesBg = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    zIndex: '5',
    top: '50%',
    left: '50%',
    background: 'rgba(0, 0, 0, 0.2)',
    transform: 'translate(-50%, -50%)',
  }

  const stylesPosition = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const stylesContainer = {
    width: '25vw',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    background: modalBg,
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.193)',
    zIndex: '10',
  }

  const stylesCloseBtn = {
    position: 'absolute',
    top: '-7%',
    right: '-3%',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'rgb(255, 255, 255, 1)',
    borderRadius: '50%',
    border: '1px solid black',
    padding: '4px 9px',
    background: 'rgb(0, 0, 0, 1)',
    cursor: 'pointer',
  }

  const stylesContent = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    gap: '10px',
  }

  const stylesTitle = {
    width: '100%',
    textAlign: alignTitle,
    padding: '15px 15px 0px 15px',
    color: colourTitle,
    fontSize: '1.3rem',
    fontWeight: '500',
  }

  const stylesInformation = {
    width: '100%',
    textAlign: alignInformation,
    padding: '0px 15px 15px 15px',
    color: colourInformation,
    fontSize: '1.3rem',
    fontWeight: '500',
  }

  const stylesConfirmationBtn = {
    width: '100%',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: colourConfirmBtn,
    border: 'none',
    padding: '10px 30px',
    borderTop: borderConfirmBtn,
    borderRadius: '0px 0px 10px 10px',
    background: colourConfirmBtnBg,
    cursor: 'pointer',
  }

  const handleConfirmBtnMouseEnter = (e) => {
    e.target.style.background = 'rgb(180, 180, 180, 0.40)'
  }

  const handleConfirmBtnMouseLeave = (e) => {
    e.target.style.background = colourConfirmBtnBg
  }

  const handleCloseBtnMouseEnter = (e) => {
    // e.target.style.background = 'rgb(255, 255, 255, 1)'
    e.target.style.background = 'rgb(180, 180, 180, 1)'
    e.target.style.color = 'rgb(0, 0, 0, 1)'
  }

  const handleCloseBtnMouseLeave = (e) => {
    e.target.style.background = 'rgb(0, 0, 0, 1)'
    e.target.style.color = 'rgb(255, 255, 255, 1)'
  }

  return (
    <div style={stylesBg}>
      <div style={stylesPosition}>
        <div style={stylesContainer}>
          <button
            onMouseEnter={handleCloseBtnMouseEnter}
            onMouseLeave={handleCloseBtnMouseLeave}
            style={stylesCloseBtn}
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            X
          </button>
          <div style={stylesContent}>
            <div style={stylesTitle}>{title}</div>
            <div style={stylesInformation}>{information}</div>
          </div>

          <button
            // className={styles.confirmationBtn}
            onMouseEnter={handleConfirmBtnMouseEnter}
            onMouseLeave={handleConfirmBtnMouseLeave}
            // onMouseOver={handleMouseOver}
            style={stylesConfirmationBtn}
            type="button"
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

InfoModal.propTypes = {
  setIsModalOpen: PropTypes.bool,
  title: PropTypes.string,
  information: PropTypes.string,
  modalBg: PropTypes.string,
  hoverCloseBtn: PropTypes.string,
  alignTitle: PropTypes.string,
  colourTitle: PropTypes.string,
  alignInformation: PropTypes.string,
  colourInformation: PropTypes.string,
  colourConfirmBtn: PropTypes.string,
  borderConfirmBtn: PropTypes.string,
  hoverConfirmBtn: PropTypes.string,
}

InfoModal.defaultProps = {
  setIsModalOpen: 'false',
  title: 'Modal Title',
  information: 'Modal information',
  modalBg: 'white',
  hoverCloseBtn: 'rgb(245, 198, 39, 1)',
  alignTitle: 'left',
  colourTitle: 'black',
  alignInformation: 'left',
  colourInformation: 'black',
  colourConfirmBtn: 'black',
  colourConfirmBtnBg: 'transparent',
  borderConfirmBtn: '2px solid black',
  hoverConfirmBtn: 'rgb(180, 180, 180, 0.40)',
}
