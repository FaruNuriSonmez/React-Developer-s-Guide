import React,{useRef} from "react";

import { useOnClickOutside } from '../../hooks';

export type Props = {
    open: boolean;
    setOpen: (v:boolean) => void;
}

const Menu = (props: Props) => {
    
    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => props.setOpen(false));

    return(
        <div ref={node}>
        </div>
    )
};

export default Menu;