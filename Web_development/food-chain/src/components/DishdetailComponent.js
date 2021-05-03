import React,{Component}  from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle,Media} from 'reactstrap';
class Dishdetail extends Component{
    constructor(props){
        super(props);       
    }
    renderDish(dish){
        return( 
            <div >
                <Card key={dish.key} >
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comment){
        const dishcomments=comment.map((comments)   =>{
            return(
                    <li key={comments.key} >
                    <div>
                        <p>{comments.comment}</p>
                        <p>--{comments.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </div>
                </li>
            )
        });
        return(
            <div >
                <Media>
                    <Media body>
                        <Media heading><h4>Comments</h4></Media>
                            <ul>
                            {dishcomments}
                            </ul>
                    </Media>
                </Media> 

            </div>
        );
    }
    render(){
        return(
            <div className='container'>
                <div className='row'> 
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                         {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Dishdetail;