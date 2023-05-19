import React from 'react';

class ImageGallery extends React.Component {
    constructor(props){  
        super(props);
        this.state = {  
            links : this.props.links
         }  
    }  
    removeImage = (link) => {
        this.setState({links : this.state.links.filter(function(item) {
            return item !== link
        })}) 
    }
    hello = () => {

        let counter = 0;
        return (
            this.state.links.map(link => {
                return(
                    <div key = {counter++} className='image'>
                        <img src={link} />
                        <button onClick={()=>this.removeImage(link)}>X</button>
                    </div>
                ) 
            })
        );
    };
    render() { 
        
        return(
            <div>
                {this.hello()}
            </div>
             
        )
    }
}

export default ImageGallery