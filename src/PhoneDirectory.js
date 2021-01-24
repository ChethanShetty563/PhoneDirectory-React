import React, { Component } from 'react';
import AddSubScriber from './AddSubscriber';
import ShowSubScriber from './ShowSubscriber';
import {BrowserRouter as Router,Route} from 'react-router-dom';



class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: [
                {
                    id: 1,
                    name: 'fvfv',
                    phone: '946654'
                },
                {
                    id: 2,
                    name: 'qqedf',
                    phone: '21255'
                }
            ]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if (subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }

        subscriberList.push(newSubscriber);
        this.setState({ subscriberList: subscriberList });
    }
    render() {
        return (
           <Router>
               <Route exact path='/' render={(props) => <ShowSubScriber {...props} subscriberList={this.state.subscriberList}/>}/>
               <Route exact path='/addSubscriber' render={({history}, props) => <AddSubScriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/>
           </Router>
        )
    }
}

export default PhoneDirectory;