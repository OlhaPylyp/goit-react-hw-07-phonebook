import { Component } from "react";
import "./App.css";
import shortid from "shortid";
import FormPhonebook from "./Components/PhoneBook";
import ContactItem from "./Components/ContactItem";
import Filter from "./Components/Filter";
import Section from "./Components/Section";
import { connect } from "react-redux";
import store from "./Redux/store";
import {getContact}  from "./Redux/Phone/options"

function App () {
  return (
    <div>
      <Section title="Phonebook">
      {this.pros.isLoading && <h1>Загружаем...</h1>}
        <FormPhonebook />
     
      </Section>
      <Section title="Contacts list">
        <Filter />
        <ContactItem />{" "}
      </Section>
    </div>
  );
}


const mapStateToProps = state => ({
  isLoading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
