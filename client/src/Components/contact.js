import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact-info">
                <div className="container-fluid">
                    <div className="row contact-row">
                        <div className="card col-sm contact-col">
                            <div class="card-body">
                                <div class="widgets_div">
                                    <div class="icon_div">
                                        <span><i class="zmdi zmdi-phone"></i></span>
                                    </div>
                                    <div class="text_div">
                                        <h5 className="card-title">Phone</h5>
                                            <span>+915443677477</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-sm contact-col">
                            <div class="card-body">
                                <h5 class="card-title">Email</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>

                        <div className="card col-sm contact-col">
                            <div class="card-body">
                                <h5 class="card-title">Great Customer service</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
