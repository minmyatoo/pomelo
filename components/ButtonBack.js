import Link from 'next/link'
import { Button } from '@nextui-org/react';

const ButtonBack = ({name}) => {
    return (
        <Link href='/'><Button>{name}</Button></Link>
    )
}
export default ButtonBack