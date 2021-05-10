import React from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
 
    function RenderMenu ({dish}) {
        return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    
    const Menu = (props) => {
            
        const menu = props.dishes.map((dish) => {
                return (
                    <div  className="col-12 col-md-5 m-1  bg-white rounded">
                        <RenderMenu dish = {dish} />
                    </div>
                );
            });
        
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;