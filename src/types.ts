export type RootStackParamList = {
  Home: undefined;
  OnboardingScreen1: undefined;
  OnboardingScreen2: undefined;
};

export type RootTabsParamList = {
  Dashboard: undefined;
  News: undefined;
  Immigration: undefined;
  Stats: undefined;
};

export type RootDrawerParamList = {
  Dashboard: undefined;
  News: undefined;
  Immigration: undefined;
  Stats: undefined;
  Hotline: undefined;
  ReportSelf: undefined;
  OnboardingScreen1: undefined;
};

//------------------------ Data types for COVID-19 API Statistics ------------------------------//

export interface UserSettings {
  onBoarded: boolean;
  enabledExposureNotifySystem: boolean;
  enabledNotifications: boolean;
}

export interface SettingsContextType extends UserSettings {
  enableExposureNotiySystem(allow: boolean): Promise<void>;
  enableNotifications(allow: boolean): Promise<void>;
  setAsOnboared(onboarded: boolean): Promise<void>;
}

//------------------------ Data types for COVID-19 API Statistics ------------------------------//

export interface BaseStats {
  status: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  active: number;
  tests: number;
  testsPerOneMillion?: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
}

export interface BaseTotalStats extends BaseStats {
  critical: number;
  recovered: number;
  updated: number;
}

export interface BaseCountryStats extends BaseStats {
  female?: number;
  male?: number;
  critical?: number;
  recovered?: number;
  updated?: number;
}

export interface TotalStats extends BaseTotalStats {
  type: string;
  affectedCountries?: number;
  countriesTracked?: {
    country: string;
    iso2: string;
    iso3: string;
  }[];
}

export interface CountryInfo {
  iso2: string;
  iso3: string;
  lat?: number;
  long?: number;
}

export interface CountryStats extends BaseCountryStats {
  country: string;
  countryCode: string;
  countryInfo: CountryInfo;
}

export interface CountryStatsSearchParams {
  countryCode?: string;
  status?: string;
}

//------------------------ Data types for the News feed ------------------------------//
export type NewsFeedItem = {
  title: string;
  urlSlug: string;
  image: string;
  articleLink: string;
  publishDate: string;
};
