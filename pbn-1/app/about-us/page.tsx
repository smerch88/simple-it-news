import { Metadata } from 'next';
import Image from 'next/image';

import { BreadCrumbs } from '@/components/BreadCrumbs';
import foto from '@/public/about/first.webp';

export const metadata: Metadata = {
  title: 'Про нас',
  description: 'Сторінка про нас',
  openGraph: {
    title: 'Про нас',
    description: 'Сторінка про нас',
    url: `${process.env.HOST}/about-us`,
    siteName: 'Simple IT News',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
      },
      {
        url: '/favicon/android-chrome-192x192.png',
        width: 192,
        height: 192,
      },
    ],
    locale: 'uk',
    type: 'website',
  },
};

const breadCrumbsList = [
  {
    link: '/',
    text: 'Головна',
  },

  {
    link: '/about-us',
    text: 'Про нас',
  },
];
const breadCrumbsJsonLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: '1',
      item: {
        '@id': `${process.env.HOST}]}`,
        name: 'Головна',
      },
    },
    {
      '@type': 'ListItem',
      position: '2',
      item: {
        '@id': `${process.env.HOST}/about-us]}`,
        name: 'Про нас',
      },
    },
  ],
};

const About = () => {
  return (
    <section className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />

      <BreadCrumbs list={breadCrumbsList} />

      <h1
        className={
          'mb-12 font-playfair text-menuTitleMob text-dark md:mb-8 md:text-menuTitleTab'
        }
      >
        Ласкаво просимо на портал Simple IT News - ваше надійне джерело для
        останніх та найактуальніших ІТ новин!
      </h1>
      <div className="text-t14 md:text-menuItemsMob xl:text-menuTitleMob xl:font-normal">
        <div className="md:mb-8 md:flex">
          <Image
            src={foto}
            width={288}
            height={268}
            alt="about img"
            className="mb-6 md:mb-0 md:mr-6 md:h-[375px] md:w-[334px] xl:mb-0 xl:mr-5 xl:h-[312px] xl:w-[582px]"
          />
          <div className="mb-12 md:mb-8 xl:w-[48%]">
            <h2
              className={
                'mb-4 font-playfair text-menuTitleMob text-dark md:mb-4 md:text-t18 xl:text-t20'
              }
            >
              Наша Місія
            </h2>
            <p>
              У глибинах Simple IT News горить вогонь інновацій та бажання
              дотримуватися швидких змін в сфері технологій. Ми віддані місії -
              надавати нашим читачам завжди свіжу та об&apos;єктивну інформацію
              про останні досягнення в індустрії ІТ. Наша пристрасть полягає в
              тому, щоб тримати вас кроком із швидкими темпами технологічного
              розвитку та ділитися цим з вами. Ми віримо, що інформація - ключ
              до розуміння та участі у сучасному світі технологій. Якщо ви
              шукаєте актуальні та об&apos;єктивні матеріали про індустрію
              інформаційних технологій, курси it та можливості навчання в галузі
              програмування, ви залишитеся задоволені нашим контентом.
            </p>
          </div>
        </div>
        <div className="mb-12 md:mb-8">
          <h2
            className={
              'mb-4 font-playfair text-menuTitleMob text-dark md:mb-6 md:text-t18 xl:text-t20'
            }
          >
            Що ми пропонуємо
          </h2>
          <ul>
            <li>
              <p>
                <span className="underline">Останні Новини:</span> Ми стежимо за
                головними подіями в світі інформаційних технологій, щоб ви
                завжди були в курсі. Регулярно публікуємо свіжі айті новини,
                інформацію про курси з програмування та it навчання, а також про
                курси з працевлаштуванням у сфері ІТ.{' '}
              </p>
            </li>
            <li>
              <p>
                <span className="underline">Експертні Автори:</span> Наші автори
                розбираються в складних темах та подіях, щоб надати вам глибше
                розуміння та контекст.
              </p>
            </li>
            <li>
              <p>
                <span className="underline">Пости та Статті:</span> Ми ділимося
                корисними порадами та стратегіями для того, щоб ви могли
                використовувати технології ще ефективніше.
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-12 md:mb-8">
          <h2
            className={
              'mb-4 font-playfair text-menuTitleMob text-dark md:mb-6 md:text-t18 xl:text-t20'
            }
          >
            Наша Команда
          </h2>
          <p>
            Simple IT News - це спільнота висококваліфікованих та пристрасних
            професіоналів в галузі ІТ, які не лише допомагають вам залишатися в
            курсі останніх подій, а й створюють для вас найкращий контент. Наша
            команда об&apos;єднує різноманітні експерті знання, поєднуючи
            технічну глибину з креативністю. Ми віримо, що в силі колективного
            зусилля та різноманіття поглядів криється справжня сила інновацій.
          </p>
        </div>
        <div className="mb-12 md:mb-8 md:flex md:flex-row-reverse">
          <Image
            src={foto}
            width={288}
            height={265}
            alt="about img"
            className="mb-6 md:mb-0 md:ml-6 md:h-[423px] md:w-[365px] xl:ml-5 xl:h-[312px] xl:w-[592px]"
          />
          <div className="mb-12 md:mb-0 xl:w-[48%]">
            <h2
              className={
                'mb-4 font-playfair text-menuTitleMob text-dark md:mb-6 md:text-t18 xl:text-t20'
              }
            >
              Гнучкість та Швидкість
            </h2>

            <ul className="list-disc pl-5">
              <li>
                Ексклюзивні Інтерв&apos;ю: Ми регулярно проводимо ексклюзивні
                інтерв&apos;ю з визначними фігурами в індустрії ІТ ви зможете
                зануритися в світ досвіду та удосконалення, а також дізнатися
                про найсучасніші тенденції в галузі. Крім того, для наших
                читачів ми рекламуємо курси IT з працевлаштуванням, щоб
                допомогти вам знайти своє місце в динамічному світі
                інформаційних технологій.
              </li>
              <li>
                Ваш Голос У Спільноті: Simple IT News - не тільки ресурс для
                читання новин, але і платформа для обміну думками. Залишайте
                свої коментарі, беріть участь у дискусіях та формуйте разом з
                нами обличчя ІТ-спільноти.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-12 md:mb-8">
          <h2
            className={
              'mb-4 font-playfair text-menuTitleMob text-dark md:mb-6 md:text-t18 xl:text-t20'
            }
          >
            Ми обіцяємо продовжувати забезпечувати вас:
          </h2>

          <ul className="list-disc pl-5">
            <li>
              Надійною Інформацією: Наша команда веде ретельний відбір та
              перевірку інформації, щоб ви могли довіряти нам.
            </li>
            <li>
              Відкритістю та Транспарентністю: Ми віримо в прозорість у
              відносинах із нашими читачами. Якщо у вас є питання чи пропозиції,
              будь ласка, зв&apos;яжіться з нами.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-12 md:mb-8">
            Приєднуйтесь до Simple IT News, де ІТ-новини стають доступнішими та
            захопливішими.
          </h3>
          <h3 className="mb-12 md:mb-8">
            Дякуємо, що обрали нас як своє джерело інформації в світі
            технологій!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
