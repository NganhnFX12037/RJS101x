import React, { Component } from 'react';
//import { Media } from 'reactstrap';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { COMMENTS } from '../shared/comment';



class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            selectedComment: null
        }
    }

    onDishSelect(dish) {
    var comments = COMMENTS.filter(e => e.dishId==dish.id);

        this.setState({ 
            selectedDish: dish,
            selectedComment: comments

        });
    }
    renderComment(comments){
        if (comments !=null)
            return(
                
                comments.map((comment)=>　{
                return (   <div in key={comment.id}>
                        <h4>Comment</h4>
                    <li>
                        <p>{comment.comment}</p>
                        <p>{comment.rating} stars</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </li>
                    </div>
                );
            })
                    
            );
                
        else
            return(
                <div></div>
            );
    }
    renderDish(dish) {
        if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-6 mt-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div div className="row">
                  <div  className="col-12 col-md-6 mt-1" >
                    {this.renderDish(this.state.selectedDish)}
                  </div>

                  <div  className="col-12 col-md-6 mt-1">
                    {this.renderComment(this.state.selectedComment)}
                  </div>
                  </div>
            </div>
        
        );
    }
}

export default Menu;