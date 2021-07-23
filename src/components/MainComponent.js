import React, { Component } from 'react';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { postComment,fetchDishes,fetchComments,fetchPromos,fetchLeaders, postFeedback } from '../redux/ActionCreater';
import { actions } from 'react-redux-form';

import {TransitionGroup,CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
    return{
        comments: state.comments,
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,

    }
}       
const mapDispatchToProps = dispatch => ({
  
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    
    resetFeedbackForm:() =>{dispatch(actions.reset('feedback'))},
    postFeedback:(values) =>{dispatch(postFeedback(values))},

    fetchDishes:() => {dispatch(fetchDishes())},
    fetchComments:() => {dispatch(fetchComments())},
    fetchPromos:() => {dispatch(fetchPromos())},
    fetchLeaders:() =>{dispatch(fetchLeaders())}
});

class Main extends Component {

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {

        const HomePage = () => {
            return(
                <Home 
                    dish={ this.props.dishes.dishes.filter( (dish)=>dish.featured )[0] }
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    
                    promotion={this.props.promotions.promotions.filter( (promotion)=>promotion.featured )[0] }
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    
                    leader={this.props.leaders.leaders.filter( (leader)=>leader.featured )[0] }
                    leaderLoading={this.props.leaders.isLoading}
                    leaderErrMess={this.props.leaders.errMess}
                />
            );
        };

        const AboutUsPage = () => {
            return(
                <About 
                    leader={this.props.leaders.leaders}
                    leaderLoading={this.props.leaders.isLoading}
                    leaderErrMess={this.props.leaders.errMess}
                />
            );
        };


        const DishWithId = ({match}) => {
            return(
                <DishDetail 
                
                dish={ this.props.dishes.dishes.filter( (dish)=>dish.featured )[0] }
                isLoading={this.props.dishes.isLoading}
                ErrMess={this.props.dishes.errMess}
                comments={this.props.comments.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10)) } 
                commentsErrMess={this.props.comments.errMess}
                postComment={this.props.postComment}
                
                />
            );
        };



        return (
            <div>
                <Header />
                
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/aboutus' component={AboutUsPage} />
                            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                            <Redirect to="/home" />
                        </Switch>
                        </CSSTransition>
                    </TransitionGroup>                

                <Footer></Footer>
            </div> 
        );

    }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));


/**
 * 
 * - connect(): generates a wrapper container component that 
 *      subscribe to the store.
 */