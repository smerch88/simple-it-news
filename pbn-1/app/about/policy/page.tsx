import { Playfair_Display } from "next/font/google";

import { BreadCrumbs } from "@/components/BreadCrumbs";

import { listPolicy } from "./policyList";
import { breadCrumbsList } from "./policyList";


const playfair = Playfair_Display({
    weight: ['600'],
    subsets: ['latin'],
    style: 'normal',
    variable: '--font-playfair',
});

const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
        '@type': 'ListItem',
        position: '1',
        item: {
            '@id': `${process.env.HOST}]}`,
            name: "Головна",
        },
    },
    {
        '@type': 'ListItem',
        position: '2',
        item: {
            '@id': `${process.env.HOST}/about]}`,
            name: "Про нас",
        },
    },
    {
        '@type': 'ListItem',
        position: '3',
        item: {
            '@id': `${process.env.HOST}/about/policy]}`,
            name: "Політики конфідіційності",
        },
    },


    ]
};

const Policy = () => {

    return (

        <div className="container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
                key="breadcrumbs-jsonld"
            />

            <BreadCrumbs list={breadCrumbsList} />

            <section>

                <h1 className={`mb-6 md:mb-[30px] ${playfair.variable} font-playfair  text-dark  text-2xl  md:text-[32px] xl:text-[40px] 
                 md:line-height-[48px] xl:line-height-[60px]tracking-[0.029px] md:text-tracking-[0.038px] xl:tracking-[0.048px]`}>
                    Політика конфіденційності Simple IT News Team
                </h1>

                <p className={`mb-12 text-sm  md:text-[16px] xl:text-[18px] md:leading-6 xl:leading-7 tracking-[0.017px] md:text-tracking-[0.019px] 
                xl:tracking-[0.022px]` }>
                    На сайті Simple IT News, доступному за адресою https://www.simpleitnews.tech/, одним з наших головних пріоритетів є конфіденційність наших відвідувачів. Цей документ про політику конфіденційності містить типи інформації, яку збирає та записує Simple IT News, а також те, як ми її використовуємо. <br /> <br />
                    Якщо у вас виникли додаткові запитання або вам потрібна додаткова інформація про нашу Політику конфіденційності, не соромтеся звертатися до нас.  <br /><br />
                    Ця Політика конфіденційності поширюється лише на нашу діяльність в Інтернеті і є дійсною для відвідувачів нашого веб-сайту щодо інформації, якою вони поділилися та/або яку вони збирають на Simple IT News. Ця політика не поширюється на будь-яку інформацію, зібрану офлайн або через інші канали, окрім цього веб-сайту.
                </p>

                <div>
                    <ul>
                        {listPolicy.map(({ id, title, text }) => (
                            <li className="mb-12  md:mb-[52px] " key={id}>
                                <h2 className={`mb-4  md:mb-[24px] ${playfair.variable} font-playfair  text-dark text-lg  md:text-[24px] tracking-[0.022px]  md:line-height-[36px] 
                                 md:text-tracking-[0.029px] `}>
                                    {title}
                                </h2>
                                <div>
                                    {text}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Policy;