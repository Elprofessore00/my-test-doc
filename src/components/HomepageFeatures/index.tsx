import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'سرور ابری',
    Svg: require('@site/static/img/server.svg').default,
    link: "docs/iaas",
    description: (
      <>
        به کمک محصول سرور ابری ابریمنت ماشین مجازی خود را با منابع مورد نظرتان تنها با چند کلیک ایجاد کنید.
      </>
    ),
  },
  {
    title: 'کانتینر ابری',
    Svg: require('@site/static/img/container.svg').default,
    link: "docs/paas",
    description: (
      <>
        با محصول کانتینر ابری ابریمنت، اپلیکیشن‌های مورد نیاز خود را ایجاد و آن‌ها را به آسانی مدیریت کنید.
      </>
    ),
  },
  {
    title: 'دیتابیس ابری',
    Svg: require('@site/static/img/database.svg').default,
    link: "docs/dbaas",
    description: (
      <>
        با محصول دیتابیس ابری دیتابیس خود را با منابع مورد نظرتان تنها با چند کلیک ایجاد کنید.
      </>
    ),
  }
  // {
  //   title: 'سرویس کاتالوگ', 
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       با سرویس کاتالوگ‌ها به آسانی و با چند کلیک برنامه‌های مورد نظر خود را ایجاد کنید.
  //     </>
  //   ),
  // }
];

function Feature({ title, Svg, link, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link
        className={clsx('card')}
        style={{ textDecoration: "none" }}
        to={link}>
        <div className={clsx('card-body')}>
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
        </div>
        <div className={clsx('card-footer')}>
          <div className="text--center padding-horiz--md">
            <Heading as="h3" style={{ color: "var(--ifm-color-primary)" }}>{title}</Heading>
            <p style={{ color: "var(--ifm-color-content)" }}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
