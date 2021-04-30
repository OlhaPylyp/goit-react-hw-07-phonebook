import { Component } from "react";
import "./App.css";
import LinearProgress from '@material-ui/core/LinearProgress';
import FormPhonebook from "./Components/PhoneBook";
import ContactItem from "./Components/ContactItem";
import Filter from "./Components/Filter";
import Section from "./Components/Section";
import { connect } from "react-redux";
import {getContact}  from "./Redux/Phone/operationApi"
import {getLoading} from "./Redux/Phone/phone_selector"


class App extends Component {
  // function App () 
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
  return (
    <div>
      <Section title="Phonebook">
      {this.props.isLoading &&  <LinearProgress color="secondary" />}
        <FormPhonebook />
     
      </Section>
      <Section title="Contacts list">
        <Filter />
        <ContactItem />{" "}
      </Section>
    </div>
  );
}}


const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
