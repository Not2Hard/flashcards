import '../styles/card.scss'

import React      from 'react'
import PropTypes  from 'prop-types'
import classnames from 'classnames'



const TRANSITION_DELAY = 200

export default class Card extends React.Component {
    static propTypes = {
        // onInMotion: PropTypes.func.isRequired,
    }

    state = {
        turning:     false,
        turningBack: false,
        turned:      false,
    }

    componentDidUpdate(prevProps){
        if (prevProps.isOpen !== this.props.isOpen){
            this.toggleTurn()
        }
    }


    handleClick = () => {

        if (this.state.turned) {
            this.setState({
                turned:  false,
                turning: true,
            })
    
            setTimeout(() => {
                this.setState({  turned:  false, })
            }, TRANSITION_DELAY)
            setTimeout(() => {
                this.setState({ turningBack: true, turning: false,})
            }, TRANSITION_DELAY)
            setTimeout(() => {
                this.setState({ turningBack: false })
            }, 800)
        } else {
            this.setState({
                turning: true,
            })

            setTimeout(() => {
                this.setState({ turned: true, turning: false })
            }, TRANSITION_DELAY)
        }
    }

    render() {
        const { card } = this.props.card
        const { turning, turned, turningBack } = this.state
        const handleClick = this.handleClick

        const cardClass  = classnames('card-content', { turning, turned, turningBack })

        const cardText = !turned ? card.front : card.back

        return (
            <div className="cardx">
                <div className={cardClass} onClick={handleClick}>
                     <p>{ cardText }</p>
                </div>
            </div>
        )
    }
}