import '../styles/card.scss'

import React      from 'react'
import PropTypes  from 'prop-types'
import classnames from 'classnames'



const TRANSITION_DELAY = 200

export default class EditableCard extends React.Component {
    static propTypes = {
        // onInMotion: PropTypes.func.isRequired,
    }

    state = {
        edit: false,
        show: {
            turning:     false,
            turningBack: false,
            turned:      false,}
        
    }

    componentDidUpdate(prevProps){
        if (prevProps.isOpen !== this.props.isOpen){
            this.toggleTurn()
        }
    }

    handleEditButton = () => {
        (!this.state.edit) ? this.setState({edit: true}) : this.setState({edit: false})

        console.log('edit:', this.state.edit)
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
        const card = this.props.card
        const { turning, turned, turningBack } = this.state
        const handleClick = this.handleClick

        const cardClass  = classnames('card-content', { turning, turned, turningBack })

        const cardText = !turned ? card.front : card.back

        return (
            <div className="cardx">
                <div className={cardClass} onClick={handleClick}>
                    <p className="card_text">{ cardText }</p>
                    <span className="card-title activator grey-text text-darken-4" onClick={this.handleEditButton} ><i className="material-icons right">more_vert</i></span>
                </div>
            </div>
        )
    }
}