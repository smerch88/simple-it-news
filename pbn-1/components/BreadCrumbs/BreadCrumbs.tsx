import { FC } from 'react';
import Link from "next/link";

type BreadCrumbsPropType = {
    id: number,
    link: string,
    text: string
}

interface BreadCrumbsProps {
    list: BreadCrumbsPropType[];
}


export const BreadCrumbs: FC<BreadCrumbsProps> = ({ list }) => {

    return (
        <nav className="mb-6 md:mb-7 xl:mb-10">
            {
                list.map(({ id, link, text }: any) => {

                    return (

                        <Link key={id} rel="canonical" className="text-[12px]  md:text-[12px] xl:text-[14px] text-lightgrey  line-height-[13px] md:line-height-[15.6px] xl:line-height-[21px] 
                             tracking-[0.012px] md:text-tracking-[0.014px] xl:tracking-[0.017px]" href={link}>
                            {text}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

