import React,{Component} from 'react';
import {  Navbar,Nav, NavbarBrand,NavItem,Collapse,NavbarToggler,Jumbotron,Button,Modal,ModalBody,ModalHeader,Form,FormGroup,Input,Label,Col,CustomInput} from 'reactstrap';

import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            isNavOpen : false,
            isModelOpen : false
        };
        this.toggleModel = this.toggleModel.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }
    toggleModel(){
        this.setState({
            isModelOpen : !this.state.isModelOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remeber.checked);
            console.log("Username: " ,this.username.value , " Password: " , this.password.value
            , " Remember: " , this.remeber.checked);
        event.preventDefault();

    }
    render(){
        return(
            <>
            <Navbar dark  expand = 'md'>
                <div className="container">
                    <NavbarToggler onClick = {this.toggleNav }/>
                    <NavbarBrand href="/" className='mr-auto'><img src='assets/images/logo.png' height= '40' width='41' ></img>Food-Chain </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar >
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/Home'><span className='fa fa-home fa-lg'></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'><span className='fa fa-info fa-lg'></span>About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/Menu'><span className='fa fa-list fa-lg'></span>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'><span className='fa fa-address-card fa-lg'></span>Contact us</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModel}><span className='fa fa-sign-in fa-lg'></span>LogIn</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Food-Chain</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModelOpen} toggle={ ()=>this.toggleModel} >
                <ModalHeader toggle={ ()=>this.toggleModel}>LogIn</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                </ModalBody>
            </Modal>
            </>
        );

    }
}
export default Header;