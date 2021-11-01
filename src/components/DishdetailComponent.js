
   
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import { Control, LocalForm } from 'react-redux-form';
//import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
//import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderDish({dish}) {
            return(
                <div className="col-12 col-md-5 m-1">
                    
                        <Card>
                            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    
                </div>
            );

    }

    function RenderComments({comments, dish, dishId}) {
        if (comments != null && dishId == dish.id)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <div>
                            {comments.map((comment) => {
                                return (
                                    <div in key={comment._id}>
                                        <li>
                                        <p>{comment.comment}</p>
                                        <p>{comment.rating} stars</p>
                                        <p>-- {comment.author.firstname} {comment.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
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
                        <Breadcrumb>
                            <BreadcrumbItem>Menu</BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} favorite={props.favorite} postFavorite={props.postFavorite} />
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
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
