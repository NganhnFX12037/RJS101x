
   
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
//import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderDish({dish}) {
        if (dish != null)
        return(
                <div className="col-12 col-md-6 mt-3">
                    
                        <Card>
                            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    
                </div>
            );
            else
            return(
                <div></div>
            );
    
            }

    function RenderComments({comments}){
        if (comments != null)
            return(
                <div className="col-12 col-md-6 mt-3">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <div>
                            {comments.map((comment) => {
                                return (
                                    <div in key={comment._id}>
                                        <li>
                                        <p>{comment.comment}</p>
                                        <p>{comment.rating} stars</p>
                                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                        </li>
                                    </div>
                                );
                            })}
                        </div>
                    </ul>
                </div>
          );
        else
            return(
                <div></div>
            );
    
            }

    const DishDetail = (props) => {
       if (props.dish != null)        
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments}
                            dishId={props.dish._id} />
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default DishDetail;
