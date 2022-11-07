import { Slide} from '@mui/material';
import * as React from 'react';



const SlideAnimation = (props) => {

    return(
        
            <Slide direction="right" in={true} mountOnEnter unmountOnExit
            timeout={1000}>
                {props.target}
            </Slide>
    );

}

export default SlideAnimation;