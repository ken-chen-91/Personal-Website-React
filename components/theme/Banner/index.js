import { Row } from  'antd'
import Intro from '../../Banner-Components'


const Banner = () => {
    return (
        <div className="banner-container">
            <Row justify="center" >    
                <Intro/>
            </Row>
            
        </div>
    )
}

export default Banner