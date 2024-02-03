import cn from 'classnames';
import { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

import { BreadCrumbs } from '@/components/BreadCrumbs';

export const metadata: Metadata = {
  title: 'Політика конфіденційності',
  description: 'Сторінка політики конфіденційності',
  openGraph: {
    title: 'Політика конфіденційності',
    description: 'Сторінка політики конфіденційності',
    url: `${process.env.HOST}/about-us/policy`,
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
    text: 'Головна /',
  },

  {
    link: '/about-us',
    text: 'Про нас /',
  },

  {
    link: '/about/policy',
    text: 'Політики конфідіційності',
  },
];

const playfair = Playfair_Display({
  weight: ['600'],
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-playfair',
});

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
    {
      '@type': 'ListItem',
      position: '3',
      item: {
        '@id': `${process.env.HOST}/about-us/policy]}`,
        name: 'Політики конфідіційності',
      },
    },
  ],
};

const Policy = () => {
  return (
    <section className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />

      <BreadCrumbs list={breadCrumbsList} />

      <div>
        <ul className="text-t14 md:text-menuItemsMob xl:text-menuTitleMob xl:font-normal">
          <li className="md:mb-mb-14 mb-12">
            <h1
              className={cn(
                playfair.variable,
                'mb-6 font-playfair text-t24  text-dark md:mb-8 md:text-t32 xl:text-t40',
              )}
            >
              Політика конфіденційності Simple IT News Team
            </h1>

            <p>
              <span className="mb-6 block">
                На сайті Simple IT News, доступному за адресою
                https://www.simpleitnews.tech/, одним з наших головних
                пріоритетів є конфіденційність наших відвідувачів. Цей документ
                про політику конфіденційності містить типи інформації, яку
                збирає та записує Simple IT News, а також те, як ми її
                використовуємо.
              </span>
              <span className="mb-6 block">
                Якщо у вас виникли додаткові запитання або вам потрібна
                додаткова інформація про нашу Політику конфіденційності, не
                соромтеся звертатися до нас.
              </span>
              <span className="block">
                Ця Політика конфіденційності поширюється лише на нашу діяльність
                в Інтернеті і є дійсною для відвідувачів нашого веб-сайту щодо
                інформації, якою вони поділилися та/або яку вони збирають на
                Simple IT News. Ця політика не поширюється на будь-яку
                інформацію, зібрану офлайн або через інші канали, окрім цього
                веб-сайту.
              </span>
            </p>
          </li>

          <li className="mb-12 md:mb-14">
            <h2
              className={cn(
                playfair.variable,
                'md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24',
              )}
            >
              Згода
            </h2>
            <p>
              Користуючись нашим веб - сайтом, ви тим самим погоджуєтеся з нашою
              Політикою конфіденційності та погоджуєтеся з її умовами.
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                'md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24',
              )}
            >
              Інформація, яку ми збираємо
            </h2>
            <p>
              <span className="mb-6 block">
                Особиста інформація, яку вас просять надати, і причини, чому вас
                просять надати, будуть з’ясовані вам у момент, коли ми просимо
                вас надати вашу особисту інформацію.
              </span>
              <span className="mb-6 block">
                Якщо ви зв’яжетеся з нами безпосередньо, ми можемо отримати
                додаткову інформацію про вас, таку як ваше ім’я, адресу
                електронної пошти, номер телефону, вміст повідомлення та/ або
                вкладення, які ви можете надіслати нам, а також будь - яку іншу
                інформацію, яку ви можете надати.
              </span>
              <span className="block">
                Коли ви реєструєте обліковий запис, ми можемо попросити вашу
                контактну інформацію, включаючи такі елементи, як ім’я, назва
                компанії, адреса, адреса електронної пошти та номер телефону.
              </span>
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Як ми використовуємо вашу інформацію
            </h2>
            <p>
              <span className="mb-6 block">
                Як ми використовуємо вашу інформацію
              </span>
              <span className="mb-2 block">
                Ми використовуємо зібрану інформацію різними способами, зокрема
                для:
              </span>
            </p>
            <ul className="list-disc pl-5">
              <li className="mb-1">
                Надавати, керувати та підтримувати наш веб-сайт
              </li>
              <li className="mb-1">
                Покращуйте, персоналізуйте та розширюйте наш веб-сайт
              </li>
              <li className="mb-1">
                Зрозуміти та проаналізувати, як ви використовуєте наш веб-сайт
              </li>
              <li className="mb-1">
                Розробляйте нові продукти, послуги, функції та функції
              </li>
              <li className="mb-1">
                Спілкуватися з вами безпосередньо або через одного з наших
                партнерів, зокрема для обслуговування клієнтів, щоб надавати вам
                оновлення та іншу інформацію, що стосується веб-сайту, а також
                для маркетингових і рекламних цілей
              </li>
              <li className="mb-1">Надсилати вам електронні листи</li>
              <li> Знайти та запобігти шахрайству</li>
            </ul>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Файли журналів
            </h2>
            <p>
              Simple IT News використовує стандартну процедуру використання
              файлів журналу. Ці файли реєструють відвідувачів, коли вони
              відвідують веб-сайти. Усі хостингові компанії займаються цим і
              частково аналітикою послуг хостингу. Інформація, зібрана файлами
              журналу, включає адреси Інтернет-протоколу (IP), тип браузера,
              Інтернет-провайдера (ISP), позначку дати й часу, сторінки
              переходу/виходу та, можливо, кількість кліків. Вони не пов’язані з
              будь-якою інформацією, яка дозволяє ідентифікувати особу. Метою
              інформації є аналіз тенденцій, адміністрування сайту, відстеження
              переміщень користувачів на веб-сайті та збір демографічної
              інформації.
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Файли cookie та веб-маяки
            </h2>
            <p>
              Як і будь-який інший веб-сайт, Simple IT News використовує файли
              cookie. Ці файли cookie використовуються для зберігання
              інформації, включно з уподобаннями відвідувачів і сторінками
              веб-сайту, до яких відвідував або відвідав відвідувач. Інформація
              використовується для оптимізації роботи користувачів шляхом
              налаштування вмісту нашої веб-сторінки на основі типу браузера
              відвідувачів та/або іншої інформації.
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Google DoubleClick DART Cookie
            </h2>
            <p>
              Як і будь-який інший веб-сайт, Simple IT News використовує файли
              cookie. Ці файли cookie використовуються для зберігання
              інформації, включно з уподобаннями відвідувачів і сторінками
              веб-сайту, до яких відвідував або відвідав відвідувач. Інформація
              використовується для оптимізації роботи користувачів шляхом
              налаштування вмісту нашої веб-сторінки на основі типу браузера
              відвідувачів та/або іншої інформації.
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Наші рекламні партнери
            </h2>
            <p>
              Деякі рекламодавці на нашому сайті можуть використовувати файли
              cookie та веб-маяки. Наші рекламні партнери перераховані нижче.
              Кожен із наших рекламних партнерів має власну політику
              конфіденційності щодо даних користувачів. Для полегшення доступу
              ми зробили гіперпосилання на їх Політику конфіденційності нижче.
            </p>
            <ul className="mt-3 list-disc pl-5">
              <li className="mb-1">
                <p>Google</p>
              </li>
              <li>
                <a
                  className="block max-w-full overflow-hidden text-blue"
                  href="https://policies.google.com/technologies/ads"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </li>
            </ul>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Політика конфіденційності рекламних партнерів
            </h2>
            <p>
              <span className="mb-6 block">
                Ви можете переглянути цей список, щоб знайти політику
                конфіденційності для кожного з рекламних партнерів Simple IT
                News.
              </span>
              <span className="mb-6 block">
                Сторонні рекламні сервери або рекламні мережі використовують
                такі технології, як файли cookie, JavaScript або веб-маяки, які
                використовуються у відповідних рекламних оголошеннях і
                посиланнях, що з’являються на Simple IT News і надсилаються
                безпосередньо в браузер користувачів. Вони автоматично отримують
                вашу IP-адресу, коли це відбувається. Ці технології
                використовуються для вимірювання ефективності їхніх рекламних
                кампаній та/або для персоналізації рекламного вмісту, який ви
                бачите на веб-сайтах, які відвідуєте.
              </span>
              <span className="block">
                Зверніть увагу, що Simple IT News не має доступу або контролю
                над цими файлами cookie, які використовуються сторонніми
                рекламодавцями.
              </span>
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Політика конфіденційності третіх сторін
            </h2>
            <p>
              <span className="mb-6 block">
                Політика конфіденційності Simple IT News не поширюється на інших
                рекламодавців або веб-сайти. Таким чином, ми радимо вам
                ознайомитися з відповідною Політикою конфіденційності цих
                сторонніх рекламних серверів для отримання більш детальної
                інформації. Він може включати їхні практики та інструкції щодо
                того, як відмовитися від певних варіантів.
              </span>
              <span className="block">
                Ви можете вимкнути файли cookie за допомогою індивідуальних
                параметрів браузера. Щоб отримати більш детальну інформацію про
                керування файлами cookie в певних веб-браузерах, її можна знайти
                на веб-сайтах відповідних браузерів.
              </span>
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Права на конфіденційність CCPA (не продавати мою особисту
              інформацію)
            </h2>
            <p>
              <span className="mb-6 block">
                Відповідно до CCPA, серед інших прав, споживачі Каліфорнії мають
                право:
              </span>
              <span className="mb-6 block">
                Вимагати від компанії, яка збирає персональні дані споживача,
                розкриття категорій і конкретних частин персональних даних, які
                компанія зібрала про споживачів.
              </span>
              <span className="mb-6 block">
                Вимагати від компанії видалення будь-яких особистих даних про
                споживача, які компанія зібрала.
              </span>
              <span className="mb-6 block">
                Вимагайте, щоб компанія, яка продає персональні дані споживача,
                не продавала персональні дані споживача.
              </span>
              <span className="block">
                Якщо ви подасте запит, ми матимемо один місяць, щоб відповісти
                вам. Якщо ви хочете скористатися будь-яким із цих прав,
                зв’яжіться з нами.
              </span>
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Права на захист даних GDPR
            </h2>
            <p>
              <span className="mb-6 block">
                Ми хочемо переконатися, що ви повністю знаєте всі свої права на
                захист даних. Кожен користувач має право на:
              </span>
              <span className="mb-6 block">
                Право на доступ – ви маєте право вимагати копії своїх
                персональних даних. Ми можемо стягувати з вас невелику плату за
                цю послугу.
              </span>
              <span className="mb-6 block">
                Право на виправлення – ви маєте право вимагати від нас
                виправлення будь-якої інформації, яку ви вважаєте неточною. Ви
                також маєте право вимагати від нас доповнити інформацію, яку ви
                вважаєте неповною.
              </span>
              <span className="mb-6 block">
                Право на видалення – Ви маєте право вимагати видалення ваших
                персональних даних за певних умов.
              </span>
              <span className="mb-6 block">
                Право на обмеження обробки – ви маєте право вимагати обмеження
                обробки ваших персональних даних за певних умов.
              </span>
              <span className="mb-6 block">
                Право на заперечення проти обробки – ви маєте право заперечити
                проти обробки ваших персональних даних за певних умов.
              </span>
              <span className="mb-6 block">
                Право на перенесення даних. Ви маєте право вимагати від нас
                передати зібрані нами дані іншій організації або безпосередньо
                вам за певних умов.
              </span>

              <span className="block">
                Якщо ви подасте запит, ми матимемо один місяць, щоб відповісти
                вам. Якщо ви хочете скористатися будь-яким із цих прав,
                зв’яжіться з нами.
              </span>
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Інформація для дітей
            </h2>
            <p>
              <span className="mb-6 block">
                Ще одним нашим пріоритетом є захист дітей під час користування
                Інтернетом. Ми заохочуємо батьків і опікунів спостерігати, брати
                участь і/або контролювати та керувати їхньою діяльністю в
                Інтернеті.
              </span>
              <span className="block">
                Simple IT News свідомо не збирає будь-яку особисту інформацію
                від дітей віком до 13 років. Якщо ви вважаєте, що ваша дитина
                надала таку інформацію на нашому веб-сайті, ми настійно
                рекомендуємо вам негайно зв’язатися з нами, і ми докладемо всіх
                зусиль, щоб негайно видалити таку інформацію з наших записів.
              </span>
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Зміни в цій Політиці конфіденційності
            </h2>
            <p>
              Час від часу ми можемо оновлювати нашу Політику конфіденційності.
              Тому ми радимо вам періодично переглядати цю сторінку на предмет
              будь-яких змін. Ми повідомимо вас про будь-які зміни,
              опублікувавши нову Політику конфіденційності на цій сторінці. Ці
              зміни набувають чинності негайно після їх публікації на цій
              сторінці.
            </p>
          </li>
          <li className="md:mb-mb-14 mb-12">
            <h2
              className={cn(
                playfair.variable,
                `md:mb-mb-6 mb-4 font-playfair text-menuTitleMob  text-dark  md:text-t24`,
              )}
            >
              Зв&apos;яжіться з нами
            </h2>
            <p>
              Якщо у вас є запитання чи пропозиції щодо нашої Політики
              конфіденційності, не соромтеся зв’язатися з нами.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
