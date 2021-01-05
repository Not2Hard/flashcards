import '../styles/card.scss'

import React      from 'react'
import PropTypes  from 'prop-types'
import classnames from 'classnames'


const TRANSITION_DELAY = 200

export default class EditableCard extends React.Component {
    static propTypes = {
        // onInMotion: PropTypes.func.isRequired,
    }


    constructor(props) {
        super(props)

        this.state = {
            edit: !props.card.front && !props.card.back ? true : false,
            show: {
                turning:     false,
                turningBack: false,
                turned:      false,
            },
                front: props.card.front,
                back: props.card.back,
                id: props.card.id,
            
        }
    }

    componentWillReceiveProps(props) {
        const state = { ...this.state }

        state.front = props.card.front
        state.back = props.card.back
        state.id = props.card.id

        if (props.card.front === '') {
            this.setState({ edit: true, })
        }

        this.setState(state)
    }
   
    componentDidUpdate(prevProps){
        if (prevProps.isOpen !== this.props.isOpen){
            this.toggleTurn()
        }
    }

    handleEditButton = (e) => {
        e.stopPropagation()

        this.setState({ edit: !this.state.edit })
    }

    handleClick = () => {

        if (this.state.edit) {
            return
        }

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

    handlFrontChange = (e) => {
        this.setState({front: e.target.value})
    }
    handlBackChange = (e) => {
        this.setState({back: e.target.value})
    }

    handleSaveButton = () => {
        const newCard = {front: this.state.front, back: this.state.back, id: this.state.id}
        const handleSave = this.props.handleSave
        this.setState({ edit: false }, () => {
            handleSave(newCard)
        })
    }

    handleRemoveButton = (id) => {
        const handleRemove = this.props.handleRemove
        handleRemove(id)
    }
    

    render() {
        const card = this.props.card
        const { turning, turned, turningBack } = this.state
        const handleClick = this.handleClick

        const cardClass  = classnames('card-content', { turning, turned, turningBack })

        // const cardText = !turned ? card.front : card.back

        let cardText

        if (this.state.edit) {
            cardText = !turned ? this.state.front : this.state.back
        } else {
            cardText = !turned ? card.front : card.back
        }

        return (
            <div className="cardx">
                { this.state.edit ? (
                            <div className={cardClass} onClick={handleClick}>
                                <div className="top-icons">
                                    <span className="card-icon" onClick={this.handleSaveButton} ><i className="material-icons right">play_arrow</i></span>
                                    <span className="card-icon" onClick={e => {this.handleRemoveButton(this.state.id)}} ><i className="material-icons right">delete_forever</i></span>
                                </div>
                                <div className="col s12">
                                    <div className="row">
                                        Question:  
                                        <div className="input-field inline">
                                            <input onChange={ this.handlFrontChange } type="text" value={this.state.front} name="front"  className="validate"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        Answer:  
                                        <div className="input-field inline">
                                            <input onChange={ this.handlBackChange } type="text" value={this.state.back}  name="back" className="validate"/>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                 ) : (
                <div className={cardClass} onClick={handleClick}>
                    <div className="top-icons">
                         <span className="card-icon" onClick={this.handleEditButton} ><i className="material-icons right">edit</i></span>
                    </div>
                    <p className="card_text">{ cardText }</p>
                </div>
                 )
                }
                

            </div>
        )
    }
}