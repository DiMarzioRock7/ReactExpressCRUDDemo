import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faMap,faSmile } from '@fortawesome/free-solid-svg-icons'

export default class ButtonTable extends Component{

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <button className="btn btn-primary btn-block">
                        <div className="widget text-center">
                            <div className="row vertical-align">
                                <FontAwesomeIcon icon={faMap} className="fa-4x mx-auto"/>
                            </div>
                            <br/>
                            <h4 className="font-bold no-margins">
                                Button 1
                            </h4>
                        </div>
                    </button>
                </div>

                <div className="col-md-4 col-sm-12">
                    <button className="btn btn-success btn-block">
                        <div className="widget navy-bg text-center">
                            <div className="row vertical-align">
                                <FontAwesomeIcon icon={faThumbsUp} className="fa-4x mx-auto"/>
                            </div>
                            <br/>
                            <h4 className="font-bold no-margins">
                                Button 2
                            </h4>
                        </div>
                    </button>
                </div>

                <div className="col-md-4 col-sm-12">
                    <button className="btn btn-danger btn-block">
                        <div className="widget red-bg text-center">
                            <div className="row vertical-align">
                                <FontAwesomeIcon icon={faSmile} className="fa-4x mx-auto"/>
                            </div>
                            <br/>
                            <h4 className="font-bold no-margins">
                                Button 3
                            </h4>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}


