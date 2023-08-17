import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages, Footer } from '~/components';
import {
  getAboutFromCache,
  getFooterFromCache,
  getHeroFromCache,
  getLightboxFromCache,
  getProfilesFromCache,
  getStudentGroupsFromCache
} from '~/utils';

export const dynamic = 'force-dynamic';

type ParamsType = {
  locale: string;
};

async function getData({ locale }: ParamsType) {
  const hero = await getHeroFromCache(locale);
  const about = await getAboutFromCache(locale);
  const lightbox = await getLightboxFromCache(locale);
  const groups = await getStudentGroupsFromCache(locale);
  const profiles = await getProfilesFromCache(locale);
  const footer = await getFooterFromCache(locale);

  return { hero, about, lightbox, groups, profiles, footer };
}

export default async function Page({ params }: { params: ParamsType }) {
  const { hero, about, lightbox, groups, profiles, footer } = await getData(params);

  return (
    <>
      <HomeGreeting heroImage={hero} />
      <div className="mx-auto flex max-w-home flex-col gap-[calc(80px+2rem)] p-8 pb-[calc(80px+2rem)]">
        <div />
        <HomeSubpages />
        <HomeAbout about={about} images={lightbox} />
        <HomeStudentGroups groups={groups} />
        <HomePresidency profiles={profiles} />
      </div>
      <Footer data={footer} />
    </>
  );
}
