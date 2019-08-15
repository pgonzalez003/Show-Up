import React, { Component, Fragment } from "react";


class Card extends Component {
    redner() {
        return(
            <Fragment>
                <div class="card">
                    <div class="card-body">
                        <div>
                             <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Card;