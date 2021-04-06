import './App.css';
import React, { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';

const message = {
  en: { 
    heading: 'Welcome to our react application',
    subheading: 'Einfache Internationalisierung in Aktion',
    title: 'lets learn a simple way in {channelName}',
  },
  de: {
    heading: 'Willkommen zu unserer Reaktionsanwendung',
    subheading: 'Einfache Internationalisierung in Aktion',
    title: 'Lass uns einen einfachen Weg lernen {channelName}',
  },
};



  const App = (props) =>{

  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    setLocale(e.target.value);
  };


  return (
    <>
    <select onChange={handleChange} defaultValue={locale}>
      {['en','de'].map((x)=>(
        <option key={x}>{x}</option>
      ))}
    </select>
        <IntlProvider locale={locale} messages={message[locale]}>
        <p>
          <FormattedMessage
          id="heading"
          defaultValue="some default one"
          values={{locale}}/>
          <br/>
          <FormattedMessage id="subheading" defaultMessage = "default msg"/>
          
        </p>
        <p>
          <FormattedMessage
          id="title"
          defaultMessage="lets learn a simple way in {channelName}"
          values={{channelName:'forThoseWhoCare'}}
          />
        </p>

        <p>
          <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
          />
        </p> 
        </IntlProvider>

    </>
  );
}

export default App;
