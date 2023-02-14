import React from 'react';
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'

const Virtual = () => {
    return (
        <div className={css.Virtual}>
            <div className={css.left_s}>
              <span>VIRTUAL TRY-ON</span>
              <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
              <span>Try Now!</span>
              <img src={Shade} alt='shade' />
            </div>

            <div className={css.right_s}>
                Virtual img
            </div>
            
        </div>
    );
};

export default Virtual;