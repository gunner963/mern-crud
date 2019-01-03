import React, { Component } from 'react'
import { connect } from 'react-redux'

interface IProps {
  contacts?: any[]
}
class Contacts extends Component<IProps> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const { contacts } = this.props
    console.log(contacts)
    return <div>Contacts Component </div>
  }
}
const mapStateToProps = (state: any) => {
  return { contacts: state.contacts }
}

export default connect(mapStateToProps)(Contacts)
