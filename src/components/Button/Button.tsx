import react from 'react';
import {Button} from 'legion-react';
import 'legion-react/dist/style.css'

export default function LgnButton(props: any) {
    <Button client:load {...props}>{props.children}</Button>
}