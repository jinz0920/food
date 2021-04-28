
import { Button } from 'antd'

function ButtonMenu({ textContent }) {



    return (
        <Button type="primary" shape="round">
            {textContent}
        </Button>
    )
}

export default ButtonMenu
