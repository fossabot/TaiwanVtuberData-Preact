import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';
import { StateUpdater } from 'preact/hooks';
import {
  LanguageOption,
  LanguageOptions,
  validI18n,
} from '../../types/LanguageOptions';
import style from './style.css';

export interface HeaderProps {
  siteUrlPrefix?: string;
  locale: validI18n;
  setLocale: StateUpdater<validI18n>;
}

const Header: FunctionalComponent<HeaderProps> = (props: HeaderProps) => {
  // use default URL prefix (no prefix) if in development
  const SITE_URL_PREFIX: string = props.siteUrlPrefix ?? '';

  const DropDownElement = (
    languageOptions: Array<LanguageOption>,
    locale: string,
    setLocale: StateUpdater<validI18n>
  ): h.JSX.Element => {
    return (
      <Fragment>
        <span>
          <Text id="header.chooseLanguage">Choose language:</Text>
        </span>
        <select
          class={style.dropDown}
          value={locale}
          onChange={(event: any) => {
            setLocale(event.target.value);
          }}
        >
          {languageOptions.map((e) => (
            <option key={e.i18n} value={e.i18n}>
              {e.displayText}
            </option>
          ))}
        </select>
      </Fragment>
    );
  };

  const LinkElement = (textID: string, linkTo: string): h.JSX.Element => {
    return (
      <div class={style.gridItem}>
        <Link href={linkTo}>
          <Text id={textID}>empty</Text>
        </Link>
      </div>
    );
  };

  return (
    <header>
      <h1 class={style.title}>
        <Text id="header.title">Taiwan VTuber Data</Text>
      </h1>
      {DropDownElement(LanguageOptions, props.locale, props.setLocale)}
      <nav class={style.navGrid}>
        {[
          { textID: 'header.home', linkTo: `${SITE_URL_PREFIX}/` },
          {
            textID: 'header.eventCalendar',
            linkTo: `${SITE_URL_PREFIX}/event-calendar`,
          },
          {
            textID: 'header.allVTubers',
            linkTo: `${SITE_URL_PREFIX}/all-vtubers`,
          },
          {
            textID: 'header.groupList',
            linkTo: `${SITE_URL_PREFIX}/group-calendar`,
          },
          {
            textID: 'header.trendingVTubers',
            linkTo: `${SITE_URL_PREFIX}/trending-vtubers`,
          },
          {
            textID: 'header.trendingVideos',
            linkTo: `${SITE_URL_PREFIX}/trending-videos`,
          },
          {
            textID: 'header.growingVTubers',
            linkTo: `${SITE_URL_PREFIX}/growing-vtubers`,
          },
          {
            textID: 'header.debutVTubers',
            linkTo: `${SITE_URL_PREFIX}/debut-vtubers`,
          },
          {
            textID: 'header.graduateVTubers',
            linkTo: `${SITE_URL_PREFIX}/graduate-vtubers`,
          },
          {
            textID: 'header.reportIssue',
            linkTo: `${SITE_URL_PREFIX}/report-issue`,
          },
          { textID: 'header.about', linkTo: `${SITE_URL_PREFIX}/about` },
        ].map((e) => LinkElement(e.textID, e.linkTo))}
      </nav>
    </header>
  );
};

export default Header;
