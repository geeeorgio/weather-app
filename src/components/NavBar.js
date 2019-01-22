import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Input,
    Button,
} from 'reactstrap';
import cities from '../cities.json';

class NavBar extends Component {
    constructor(props) {
    super(props);
        this.state = {
            isOpen: false,
            inp: '',
            weather: false,
        };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);    
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        this.setState({
            inp: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let cityName = this.state.inp;
        let cityId = cities.filter(item => item.name === cityName ? item.id : false);
        this.props.findId(cityId);
        document.getElementById('inp').value = "";

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }    

    render() {

    return(

        <Navbar color="transparent" light expand="md">
            <NavbarBrand href="/">Weather App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/location">City</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/weather-table">5 day forecast</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    <Form inline onSubmit={this.handleSubmit}>
                        <Input id="inp" className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.handleInputChange}/>
                        <Button>Submit</Button>
                    </Form>
                </Nav>
            </Collapse>
        </Navbar>
        
    ) 
  }
}

export default NavBar;